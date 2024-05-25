import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:7777/api/";

export const travelersApi = createApi({
  reducerPath: "travelersApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    getTravelers: build.query<any, void>({
      query: () => `traveler`,
    }),
  }),
});

export const { useGetTravelersQuery } = travelersApi;

export default travelersApi;
