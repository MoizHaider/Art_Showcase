"use client"

import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./Features/PostsSlice"
import { authSlice } from "./Features/auth";


export const store = configureStore({
    reducer: {
        postReducer,
    }
})
