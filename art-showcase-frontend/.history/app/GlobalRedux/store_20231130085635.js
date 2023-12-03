"use client"

import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./Features/PostsSlice"
import auth

export const store = configureStore({
    reducer: {
        postReducer
    }
})
