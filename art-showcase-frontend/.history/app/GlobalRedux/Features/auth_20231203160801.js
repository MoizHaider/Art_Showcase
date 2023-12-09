

import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
    
}

export const authSlice = createSlice({
    name: "posts",
    initialState,
    reducers:{
         login(state, action){
            

         },
         logout(state, action){
            
         }

    }
})

export const {  } = authSlice.actions
export default authSlice.reducer