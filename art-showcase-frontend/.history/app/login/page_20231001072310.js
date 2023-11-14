"use client";
import React from "react";

const login = (event)=>{
  const email = event.currentTarget.email.value;
  const password = event.currentTarget.password.value;
  const graphqlQuery = {
    query: `
              query loginUser($email: String!, $password: String!){
                  login(email: $email, password: $password){
                      _id
                      email
                  }
              }
          `,
    variables: {
      email: email,
      password: password,n
    },
  };
  fetch("http://localhost:8080/graphql", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(graphqlQuery),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}

function page() {

  const onSubmitHandler = (event)=>{
    event.preventDefault();
    login(event)
  }
  return (
    <form onSubmit={onSubmitHandler}>
      <label for="email">Email</label>
      <input type="email" name="email" />
      <label for="password">Password</label>
      <input type="password" name="password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default page;
