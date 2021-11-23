import React from "react";
import { GetServerSideProps } from "next";

import App from "../components/App";
import { Merchant } from "../models/merchant";

// @ts-ignore
import riak from 'no-riak';
import riak_config from '../config/riak.json';
// @ts-ignore
import nodePickle from 'node-pickle';

import testData from '../helpers/testData.json';

function Home() {
  return <App />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  let merchants: Merchant[];
  // try {
  //   const client = new riak.Client({connectionString: riak_config.connectionString});
  //   const keys = await client.listKeys({bucket: riak_config.bucket});
  //
  //   let getItemsList = function (keys: []):Promise<Merchant[]> {
  //     return new Promise(async function (resolve){
  //       let items = [];
  //       for (let key of keys) {
  //         let item = await client.get({
  //           bucket: riak_config.bucket,
  //           key: key
  //         });
  //         const decodedItem = await nodePickle.loads(item.content[0].value);
  //         const parsedData = JSON.parse(decodedItem.data);
  //         parsedData.creation_time = decodedItem['_creation_time'];
  //         items.push(parsedData);
  //       }
  //       resolve(items);
  //     });
  //   };
  //   items = await getItemsList(keys);
  // } catch (e) {
  merchants = testData;
  // }
  return {
    props: { merchants }
  };
};

export default Home;
