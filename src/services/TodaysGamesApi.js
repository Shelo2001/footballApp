import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const todaysGamesHeaders = {
  "X-RapidAPI-Host": "odds.p.rapidapi.com",
  "X-RapidAPI-Key": "e7c030867emshf2df3c1ddf4c1b5p1d0031jsn3f71c2cf6c5e",
}

const baseUrl = "https://odds.p.rapidapi.com/v4/sports"

const createRequest = (url) => ({ url, headers: todaysGamesHeaders })

export const todaysGamesApi = createApi({
  reducerPath: "todaysGamesApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getTodaysGames: builder.query({
      query: () => createRequest("/basketball_nba/scores"),
    }),
    getTodaysNflGames: builder.query({
      query: () => createRequest("/americanfootball_nfl/scores"),
    }),
    getTodaysMmaGames: builder.query({
      query: () => createRequest("/mma_mixed_martial_arts/scores"),
    }),
    getTodaysLaLigaGames: builder.query({
      query: () => createRequest("/soccer_spain_la_liga/scores"),
    }),
    getTodaysEplGames: builder.query({
      query: () => createRequest("/soccer_epl/scores"),
    }),
  }),
})

export const {
  useGetTodaysGamesQuery,
  useGetTodaysNflGamesQuery,
  useGetTodaysMmaGamesQuery,
  useGetTodaysLaLigaGamesQuery,
  useGetTodaysEplGamesQuery,
} = todaysGamesApi
