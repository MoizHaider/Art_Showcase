

import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
    posts: [],
    renderCommnetSec: false
}

export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers:{
         addPost(state, action){
            state.posts.push(action.payload)
         }
         renderCommentsSec(state, action)
    }
})

export const { addPost } = postSlice.actions
export default postSlice.reducer