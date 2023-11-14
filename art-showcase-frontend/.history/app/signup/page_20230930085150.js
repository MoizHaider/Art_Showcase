"use client";
import React, { useEffect } from "react";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

const signup = (event) => {
  const email = event.currentTarget.email.value;
  const password = event.currentTarget.password.value;
  const confirmPass = event.currentTarget.confirmPassword.value;

  const graphqlQuery = {query: `
    mutation signupUser($email: String!, $password: String!, $confirmPassword: String!){
      signup(email: $email, password: $password, confirmPassword: $confirmP)
    }
  `}
};

function page() {
  const router = useRouter();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    signup(event)
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
