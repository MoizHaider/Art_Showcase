"use client";
import React from "react";

function login() {

  const onSubmitHandler = (event)=>{

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

export default login;
