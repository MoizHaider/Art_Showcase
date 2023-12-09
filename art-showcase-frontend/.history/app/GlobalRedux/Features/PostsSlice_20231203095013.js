

import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
    posts: [],
    renderCommentSec: false
}

export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers:{
         addPost(state, action){
            state.posts.push(action.payload)
         },
         renderCommentSec(state, action){
            state.renderCommentSec = !state.renderCommentSec
         }
    }
})

export const { addPost, renderCommentSec } = postSlice.actions
export default postSlice.reducer