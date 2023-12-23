"use client";
import React from "react";
import cookie from "cookie-cutter";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../public/logo.png";
import flowerCircle from "../../public/flowerCircle.png";

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
    <div className="flex flex-col items-center justify-center h-screen bg-formBg via-pink-400 to-red-400">
      <div className="relative">
        <Image
          src={flowerCircle}
          alt="flower circle"
          width={80} // Increase the width to fit the form inside
          height={80} // Increase the height to fit the form inside
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <Image
          src={logo}
          alt="logo"
          width={40}
          height={40}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <h2 className="text-white text-lg font-bold mt-2">Art Nest</h2>
      </div>

      <form
        onSubmit={onSubmitHandler}
        className="grid bg-primary p-20 mt-4 w-[80%] lg:w-[50%] max-w-[400px] rounded-[20px]"
      >
        <label className="text-white">Email</label>
        <input
          type="email"
          name="email"
          className="bg-background text-primary p-2 rounded mb-4"
        />
        <label className="text-white">Password</label>
        <input
          type="password"
          name="password"
          className="bg-background text-primary p-2 rounded mb-4"
        />
        <button
          type="submit"
          className="mt-6 bg-accent text-primary p-2 rounded hover:bg-secondary hover:text-white transition-all"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default page;
