

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
         },
         renderCommentsSec(state, action){
            state.renderCommnetSec = !state.renderCommnetSec
         }
    }
})

export const { addPost, renderCommentsSec } = postSlice.actions
export default postSlice.reducer