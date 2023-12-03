"use client"

import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./Features/PostsSlice"
import authRe

export const store = configureStore({
    reducer: {
        postReducer
    }
})
