"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

function Auth({children}) {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("userID");
    const router = useRouter();
    if(!token || !userId){
        router.replace("/login")
    }
    const graphqlQuery = {
      query: `
                query loginUser($email: String!, $password: String!){
                    login(email: $email, password: $password){
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
    fetch("")
  return (
    <div>Auth</div>
  )
}

export default Auth