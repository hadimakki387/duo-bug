import { combineReducers } from "@reduxjs/toolkit"
import { mainApi } from "../rtk-query"
import landingSlice from "./landing/redux/landing-slice"

const reducers = combineReducers({
    landing:landingSlice,
    [mainApi.reducerPath]:mainApi.reducer
})

export default reducers