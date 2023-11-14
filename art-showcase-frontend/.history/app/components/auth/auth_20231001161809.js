"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

function Auth({children}) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userID");
    const router = useRouter();
    if(!token || !userId){
        router.replace("/login")
    }
    const graphqlQuery = {
      query: `
                query loginUser($token: String!, $_id: ID!){
                    isLoggedIn(token: $token, ){
                        _id
                        token
                    }
                }
            `,
      variables: {
        email: email,
        password: password,
      },
    };
    fetch("http://localhost:8080/graphql", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(graphqlQuery),
    })
  return (
    <div>Auth</div>
  )
}

export default Auth