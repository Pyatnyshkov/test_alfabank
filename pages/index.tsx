import React from "react";
import { GetServerSideProps } from "next";

import App from "../components/App";
import { Merchant } from "../models/merchant";

// @ts-ignore
import riak from "no-riak";
import riak_config from "../config/riak.json";
// @ts-ignore
import nodePickle from "node-pickle";

// @ts-ignore
import sha1 from "js-sha1";

import testData from "../helpers/testData.json";

function Home() {
  return <App />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  // let merchants: Merchant[];
  // try {
  //   const client = new riak.Client({connectionString: riak_config.connectionString});
  //   const keys = await client.listKeys({bucket: riak_config.bucket});
  //
  //   let getItemsList = function (keys: []):Promise<Merchant[]> {
  //     return new Promise(async function (resolve){
  //       let merchants = [];
  //       for (let key of keys) {
  //         let merchants = await client.get({
  //           bucket: riak_config.bucket,
  //           key: key
  //         });
  //         const decodedItem = await nodePickle.loads(item.content[0].value);
  //         const parsedData = JSON.parse(decodedItem.data);
  //         parsedData.creation_time = decodedItem['_creation_time'];
  //         merchants.push(parsedData);
  //       }
  //       resolve(merchants);
  //     });
  //   };
  //   merchants = await getItemsList(keys);
  // } catch (e) {
  // }
  let merchants: Merchant[] = testData;
  merchants.forEach((merchant: Merchant) => {
    merchant.password = sha1(merchant.password);
    merchant.users.forEach(
      (user: { password: string }) =>
        (user.password = sha1(user.password))
    );
  });
  return {
    props: { merchants }
  };
};

export default Home;
