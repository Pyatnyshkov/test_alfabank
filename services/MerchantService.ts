import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Merchant } from "../models/merchant";

export const merchantApi = createApi({
  reducerPath: "merchantApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: build => ({
    fetchMerchants: build.query<Merchant[], null>({
      query: () => ({
        url: "/merchants"
      })
    })
  })
});