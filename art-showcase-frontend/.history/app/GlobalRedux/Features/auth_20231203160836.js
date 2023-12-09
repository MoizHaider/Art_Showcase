

import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
    userData: {}
}

export const authSlice = createSlice({
    name: "posts",
    initialState,
    reducers:{
         login(state, action){
            state.userData = action.payload
         },
         logout(state, action){
            state.userData = initialState
         }

    }
})

export const {  } = authSlice.actions
export default authSlice.reducer