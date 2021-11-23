import React from "react";

import App from "../components/App";
import Loader from "../components/Loader";
import Layout from "../components/Layout";
import ErrorPage from "../components/Error";

import { merchantApi } from "../services/MerchantService";

const Home = () => {
  const {
    data: merchants,
    error,
    isLoading
  } = merchantApi.useFetchMerchantsQuery(null);
  return (
    <Layout>
      {isLoading && <Loader />}
      {error && <ErrorPage />}
      {merchants && <App />}
    </Layout>
  );
};

export default Home;
