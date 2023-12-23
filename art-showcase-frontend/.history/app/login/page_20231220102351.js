"use client";
import React from "react";
import cookie from "cookie-cutter";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../public/logo.png";
import flowerCircle from "../../public/flowerCircle.png";
import Link from "next/link";

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
    <div className="flex flex-col items-center justify-center h-screen bg-formBg overflow-hidden">
      <div className="relative w-[100%]">
        <Image
          src={flowerCircle}
          alt="flower circle"
          width={800} // Increase the width
          height={800} // Increase the height
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
        />
        <form
          onSubmit={onSubmitHandler}
          className="grid p-8 w-[80%] lg:w-[50%] max-w-[400px] rounded-[20px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ml-[30px]"
        >
          <Image
            src={logo}
            alt="logo"
            width={70}
            height={70}
            className="mb-2 mx-auto bg-primary rounded-[10px] p-2 shadow-lg"
          />
          <h2 className="text-accent text-lg font-bold text-center">
            Art Nest
          </h2>

          <label className="text-text mt-4">Email</label>
          <input
            type="email"
            name="email"
            className="text-primary p-1 sm:p-2 rounded-full mb-2 w-7/10 sm:w-8/10 md:w-9/10 border-gray-300 focus:outline-none focus:border-accent"
          />
          <label className="text-text">Password</label>
          <input
            type="password"
            name="password"
            className="text-primary p-1 sm:p-2 rounded-full mb-2 w-7/10 sm:w-8/10 md:w-9/10"
          />
          <div className="flex flex-col items-center gap-y-4">
            <button
              type="submit"
              className="mt-6 w-[40%] bg-primary text-text p-2 rounded-full hover:bg-accent hover:text-white transition-all"
            >
              Login
            </button>
            <div className="flex justify-center gap-x-4">
              <p>Don't have an Account</p>
              <Link href="/signup" className="text-accent font-bold">
                Signup
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default page;
