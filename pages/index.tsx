import React from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import Index from "../components/Index";

import { Merchant } from "../models/merchant";

// @ts-ignore
import riak from 'no-riak';
import riak_config from '../config/riak.json';
// @ts-ignore
import nodePickle from 'node-pickle';

import testData from '../helpers/testData.json';

function Home({ items }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <Index items={items} />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  let items: Merchant[] = [];
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
    items = testData;
  // }
  return {
    props: { items }
  };
};

export default Home;
