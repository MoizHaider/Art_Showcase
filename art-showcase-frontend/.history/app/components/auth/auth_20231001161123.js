"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

function Auth({children}) {
    const localStorage.getItem("token");
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