"use client"
import React from 'react'

function Auth() {
    localStorage.getItem("token");
    localStorage.getItem("userID");
    if(!token || !userId){
        //show some error etc
    }
    
  return (
    <div>Auth</div>
  )
}

export default Auth