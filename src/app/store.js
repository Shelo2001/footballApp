import { configureStore } from "@reduxjs/toolkit"
import { todaysGamesApi } from "../services/TodaysGamesApi"
import { oddsApi } from "../services/OddsApi"
export default configureStore({
  reducer: {
    [todaysGamesApi.reducerPath]: todaysGamesApi.reducer,
    [oddsApi.reducerPath]: oddsApi.reducer,
  },
})
