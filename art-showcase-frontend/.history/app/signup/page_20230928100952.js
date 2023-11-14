"use client";
import React from "react";

function signup() {

  return (
    <form on>
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
