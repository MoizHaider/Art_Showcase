"use client"
import React from 'react'

function Auth({children}) {
    localStorage.getItem("token");
    localStorage.getItem("userID");
    if(!token || !userId){
        //show some error etc
    }
    fetch()
  return (
    <div>Auth</div>
  )
}

export default Auth