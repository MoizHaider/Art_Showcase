"use client";
import React, { useEffect } from "react";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import logo from "../../public/logo.png";
import flowerCircle from "../../public/flowerCircle.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const signup = async (event) => {
  const email = event.currentTarget.email.value;
  const password = event.currentTarget.password.value;
  const confirmPass = event.currentTarget.confirmPassword.value;

  const graphqlQuery = {
    query: `
    mutation signupUser($email: String!, $password: String!, $confirmPassword: String!){
      signup(email: $email, password: $password, confirmPassword: $confirmPassword){
        _id
        email
      }
    }
  `,
    variables: {
      email: email,
      password: password,
      confirmPassword: confirmPass,
    },
  };
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(graphqlQuery),
      }
    );
    let data;
    if (response.status === 500) {
      return (data = { status: 500, message: "Email Already Exists" });
    }
    data = await response.json();
    data.status = 200;
    return data;
  } catch (err) {
    console.log(err);
  }
};

function page() {
  const router = useRouter();
  const [data, setData] = useState({
    status: 200,
    message: "",
    data: {},
  });

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    let response = await signup(event);
    setData(response);

    if (response.status === 500) {
      return;
    }


    localStorage.setItem("email", response.data.signup.email);
    localStorage.setItem("_id", response.data.signup._id);
    router.replace("/profile-data-input");
  };

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
      </Head>
      <div className="flex flex-col items-center justify-center h-screen bg-formBg overflow-hidden">
        <div className="relative w-[100%]">
          <div className="w-[600px] xs:w-[700px] sm:w-[850px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image
              src={flowerCircle}
              alt="flower circle"
              width={850} // Increase the width
              height={850} // Increase the height
              className="w-full object-cover "
            />
          </div>

          <form
            onSubmit={onSubmitHandler}
            className="grid justify-items-center p-2 md:p-8 w-[80%] lg:w-[50%] max-w-[400px] rounded-[20px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ml-[10px] xs:ml-[30px]"
          >
            <Image
              src={logo}
              alt="logo"
              width={70}
              height={70}
              className="mb-2 w-[60px] h-[60px] md:w-[70px] md:h-[70px]  mx-auto bg-primary rounded-[10px] p-2 shadow-lg"
            />
            <h2 className="text-accent text-lg font-bold text-center">
              Art Nest
            </h2>
            <div className="w-[90%] xs:w-[85%] md:w-full flex flex-col">
              <label className="text-text mt-4">Email</label>
              <input
                type="email"
                name="email"
                className="text-text px-2 py-1 md:py-2 rounded-full mb-2 w-7/10 sm:w-8/10 md:w-9/10 focus:outline-none focus:border-accent"
              />
            </div>

            <div className="w-[90%] xs:w-[85%] md:w-full flex flex-col">
              {" "}
              <label className="text-text">Password</label>
              <input
                type="password"
                name="password"
                className="text-text px-2 py-1 md:py-2 rounded-full mb-2 w-7/10 sm:w-8/10 md:w-9/10 focus:outline-none focus:border-accent"
              />
            </div>
            <div className="w-[90%] xs:w-[85%] md:w-full flex flex-col">
              <label className="text-text">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                className="text-text px-2 py-1 md:py-2 rounded-full mb-2 w-7/10 sm:w-8/10 md:w-9/10 focus:outline-none focus:border-accent"
              />
            </div>

            <div className="flex flex-col items-center gap-y-2 md:gap-y-4">
              <button
                type="submit"
                className="mt-6 w-[40%] bg-primary text-text p-2 rounded-full hover:bg-accent hover:text-white transition-all"
              >
                Signup
              </button>
              {data.status === 500 && (
                <div className="border-red-500 border-[1px] rounded-full px-4 py-1 bg-red-500 bg-opacity-50 text-white">
                  Email Already Exists !
                </div>
              )}
              <div className="flex flex-col text-center sm:flex-row justify-center gap-x-4">
                <p>Already have an Account</p>
                <Link href="/login" className="text-accent font-bold">
                  Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default page;
