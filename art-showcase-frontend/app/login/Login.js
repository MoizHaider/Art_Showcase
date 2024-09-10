"use client";
import React from "react";
import cookie from "cookie-cutter";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../public/logo.png";
import flowerCircle from "../../public/flowerCircle.png";
import Link from "next/link";
import { useEffect } from "react";

async function loginFun(event) {
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
  await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`, {
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
    });
}

function Login() {

  const router = useRouter();
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const loginSuccess = await loginFun(event);

    console.log("login success ", loginSuccess)

    router.prefetch("/");
    router.push("/")
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-formBg overflow-hidden">
      <div className="relative w-[100%]">
        <div className="w-[600px] xs:w-[700px] sm:w-[800px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src={flowerCircle}
            alt="flower circle"
            width={900} // Increase the width
            height={900} // Increase the height
            className="w-full object-cover "
          />
        </div>

        <form
          onSubmit={onSubmitHandler}
          className="grid justify-items-center p-8 w-[100%] md:w-[80%] lg:w-[50%] max-w-[400px] rounded-[20px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ml-[10px] xs:ml-[30px]"
        >
          <Image
            src={logo}
            alt="logo"
            width={70}
            height={70}
            className="mb-2 w-[60px] h-[60px] md:w-[70px] md:h-[70px] mx-auto bg-primary rounded-[10px] p-2 shadow-lg"
          />
          <h2 className="text-accent text-lg font-bold text-center">
            Art Nest
          </h2>

          <div className="w-[90%] xs:w-[90%] md:w-full flex flex-col">
            <label className="ml-2 text-text mt-4">Email</label>

            <input
              type="email"
              name="email"
              className=" text-text px-2 py-1 md:py-2 rounded-full mb-2  w-full  focus:outline-none focus:border-accent"
            />
          </div>
          <div className="w-[90%] xs:w-[90%] md:w-full flex flex-col">
            <label className="justify-self-start ml-2  text-text">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="text-text px-2 py-1 md:py-2 rounded-full mb-2 md:w-full focus:outline-none focus:border-accent"
            />
          </div>

          <div className="flex flex-col items-center gap-y-2 md:gap-y-4">
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

export default Login;
