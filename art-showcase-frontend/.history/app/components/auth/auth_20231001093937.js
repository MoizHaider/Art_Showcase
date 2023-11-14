"use client"
import React from 'react'

function Auth() {
    localStorage.getItem("token");
    localStorage.getItem("userID");
    if(!token)
  return (
    <div>Auth</div>
  )
}

export default Auth