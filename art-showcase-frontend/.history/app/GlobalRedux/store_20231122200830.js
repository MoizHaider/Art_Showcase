"use client"

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Features/counter/counterSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export const rootState = store.getState;
export const appDispatch = store.