"use client";
import React, { useEffect } from "react";
import { FormEvent } from "react";

const signup = (event)=>{

}

function page() {


  useEffect(()=>{
      
  })

  const onSubmitHandler = (event) => {

    
    event.preventDefault();

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
