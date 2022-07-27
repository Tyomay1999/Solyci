import {combineReducers, configureStore} from "@reduxjs/toolkit";
import card from './card'


const reducer = combineReducers({
    card
})

const store = configureStore({reducer})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store