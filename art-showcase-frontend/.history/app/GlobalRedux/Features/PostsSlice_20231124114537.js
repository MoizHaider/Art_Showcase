

import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
    userData: {},
    posts: []
}

export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers:{
         createPost(state, action){
                state.userData = action.payload.userData;
                state.posts.push(action.payload.post)
         }
    }
})

export const { addPost } = postSlice.actions
export default postSlice.reducer