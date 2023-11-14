"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

function Auth({children}) {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("userID");
    const router = useRouter()
    if(!token || !userId){
        //show some error etc
    }
    fetch()
  return (
    <div>Auth</div>
  )
}

export default Auth