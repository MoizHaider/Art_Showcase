"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import React from 'react'

function Auth({children}) {
    const [auth, setAuth] = useState(false);
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userID");
    const router = useRouter();
    if(!token || !userId){
        router.replace("/login")
    }
    const graphqlQuery = {
      query: `
                query loginUser($token: String!, $_id: ID!){
                    isLoggedIn(token: $token, _id: $id){
                        _id
                        token
                    }
                }
            `,
      variables: {
        token: token,
        _id: userId
      },
    };
    fetch("http://localhost:8080/graphql", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(graphqlQuery),
    }).then(res=>res.json()).then(({data})=>{
      if(data.isLoggedIn){
        setAuth()
      }
    })
  return (
    <div>Auth</div>
  )
}

export default Auth