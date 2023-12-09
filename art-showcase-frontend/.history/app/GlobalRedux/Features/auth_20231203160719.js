

import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
    
}

export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers:{
         addPost(state, action){
            console.log("Store state ", state.posts)
            state.posts.push(action.payload)

         },

    }
})

export const { addPost, renderCommentSec } = postSlice.actions
export default postSlice.reducer