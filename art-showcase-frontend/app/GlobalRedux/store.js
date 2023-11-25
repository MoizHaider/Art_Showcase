"use client"

import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./Features/PostsSlice"

export const store = configureStore({
    reducer: {
        postReducer
    }
})
