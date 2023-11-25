

import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
    userData: {},
    posts: []
}

export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers:{
         createPost()
    }
})