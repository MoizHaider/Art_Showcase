"use client";
import React, { useEffect } from "react";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

const signup = async (event) => {
  const email = event.currentTarget.email.value;
  const password = event.currentTarget.password.value;
  const confirmPass = event.currentTarget.confirmPassword.value;

  const graphqlQuery = {
    query: `
    mutation signupUser($email: String!, $password: String!, $confirmPassword: String!){
      signup(email: $email, password: $password, confirmPassword: $confirmPassword){
        _id
        email
      }
    }
  `,
    variables: {
      email: email,
      password: password,
      confirmPassword: confirmPass
    },
  };
  try{
    const response = await fetch("http://localhost:8080/graphql", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(graphqlQuery),
    });
    return response.json();
    
  }
  catch(err){
    console.log(err)
  }

};

function page() {
  const router = useRouter();

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const {data = await signup(event);
    console.log(data);
    sessionStorage.setItem("email", data.signup.email);
    sessionStorage.setItem("_id", .data.signup._id)

    router.replace("/profile-data-input");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label for="email">Email</label>
      <input type="email" name="email" />
      <label for="password">Password</label>
      <input type="password" name="password" />
      <label for="confirmPassword">Confirm Password</label>
      <input type="password" name="confirmPassword" />
      <button type="submit">Signup</button>
    </form>
  );
}

export default page;
