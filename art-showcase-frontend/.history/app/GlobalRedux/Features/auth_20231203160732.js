

import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
    
}

export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers:{
         addPost(state, action){
            

         },

    }
})

export const {  } = postSlice.actions
export default postSlice.reducer