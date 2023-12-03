"use client"

import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./Features/PostsSlice"
import authReducer from "./Features/"

export const store = configureStore({
    reducer: {
        postReducer
    }
})
