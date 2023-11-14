"use client";
import React from "react";

const login = (event) => {
  const email = event.currentTarget.email.value;
  const password = event.currentTarget.password.value;
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
    .then((response) => response.json())
    .then((resData) => {
      console.log(resData);
      localStorage.setItem("token", resData.data.login.token);
      localStorage.setItem("userId", resData.data.login._id);
      localStorage.setItem("email", email);

      //for auto logout
      /*
        onst remainingMilliseconds = 60 * 60 * 1000;
        const expiryDate = new Date(
          new Date().getTime() + remainingMilliseconds
        );
        localStorage.setItem('expiryDate', expiryDate.toISOString());
        this.setAutoLogout(remainingMilliseconds);
      */
    });
};

function page() {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    login(event);
  };
  return (
    <form onSubmit={onSubmitHandler} className="flex justify-center items-center h-screen">
      <div>
        <label for="email">Email</label>
        <input type="email" name="email" />
        <label for="password">Password</label>
        <input type="password" name="password" />
        <button type="submit">Login</button>
      </div>
    </form>
  );
}

export default page;
