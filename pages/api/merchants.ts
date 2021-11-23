import { NextApiRequest, NextApiResponse } from "next";

import { Merchant } from "../../models/merchant";

// @ts-ignore
import riak from "no-riak";
import riak_config from "../../config/riak.json";
// @ts-ignore
import nodePickle from "node-pickle";

// @ts-ignore
import sha1 from "js-sha1";

import testData from "../../helpers/testData.json";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  let merchants: Merchant[];
  try {
    const client = new riak.Client({
      connectionString: riak_config.connectionString
    });
    const keys = await client.listKeys({ bucket: riak_config.bucket });

    let getItemsList = function(keys: []): Promise<Merchant[]> {
      return new Promise(async function(resolve) {
        let items = [];
        for (let key of keys) {
          let item = await client.get({
            bucket: riak_config.bucket,
            key: key
          });
          const decodedItem = await nodePickle.loads(item.content[0].value);
          const parsedData = JSON.parse(decodedItem.data);
          parsedData.creation_time = decodedItem["_creation_time"];
          parsedData.password = sha1(parsedData.password);
          parsedData.users.forEach(
            (user: { password: string }) =>
              (user.password = sha1(user.password))
          );
          items.push(parsedData);
        }
        resolve(items);
      });
    };

    merchants = await getItemsList(keys);
  } catch (e) {
    merchants = testData;
  }

  res.status(200).json(merchants);
};
