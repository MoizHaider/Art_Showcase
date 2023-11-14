"use client";
import React from "react";
import { FormEvent } from "react";

function signup() {
    const graphqlQuery = {
        query: `
            mutation(){
                signup(){

                }
            }
    ` }
    const onSubmitHandler = (event)=>{
        event.preventDefault()
        console.log(event.currentTarget.email.value)
        const formData = new FormData(event.currentTarget);
        console.log(formData)
        // const response = await fetch("http://localhost:8080/graphql", {
        //     method: "post",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(graphqlQuery),
        //   })
    }

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

export default signup;
