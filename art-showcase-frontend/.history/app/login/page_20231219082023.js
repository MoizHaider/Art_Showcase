"use client";
import React from "react";
import cookie from "cookie-cutter";
import { useRouter } from "next/navigation";

const loginFun = (event) => {
  const email = event.currentTarget.email.value;
  const password = event.currentTarget.password.value;
  const graphqlQuery = {
    query: `
              query loginUser($email: String!, $password: String!){
                  login(email: $email, password: $password){
                      token
                      userData{
                        _id
                        name
                        profilePicUrl                    
                      }
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
      cookie.set("token", resData.data.login.token);
      cookie.set("userId", resData.data.login.userData._id);
      cookie.set("email", email);
      cookie.set("name", resData.data.login.userData.name);
      cookie.set("profilePicUrl", resData.data.login.userData.profilePicUrl);

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
  const router = useRouter();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    loginFun(event);
    router.replace("/");
  };
  return (
    <div>
      <h2>Art Nest</h2>
      <form
        onSubmit={onSubmitHandler}
        className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-300 via-pink-400 to-red-400"
      >
        <div className="grid  bg-primary p-20 h-[60%] jutify-center items-center rounded-[20px]">
          <label>Email</label>
          <input type="email" name="email" />
          <label>Password</label>
          <input type="password" name="password" />
          <button type="submit" className="mt-10 hover:bg-accent hover:text-white transition-all">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default page;
