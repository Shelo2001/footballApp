import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const oddsHeaders = {
  "X-RapidAPI-Host": "odds.p.rapidapi.com",
  "X-RapidAPI-Key": "e7c030867emshf2df3c1ddf4c1b5p1d0031jsn3f71c2cf6c5e",
}

const baseUrl = "https://odds.p.rapidapi.com/v4/sports/upcoming/odds"

const createRequest = (url) => ({ url, headers: oddsHeaders })

export const oddsApi = createApi({
  reducerPath: "oddsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getOdds: builder.query({
      query: () => createRequest("/?sport=upcoming&regions=uk"),
    }),
  }),
})

export const { useGetOddsQuery } = oddsApi
