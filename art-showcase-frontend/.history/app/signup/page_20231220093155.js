"use client";
import React, { useEffect } from "react";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import logo from "../../public/logo.png";
import flowerCircle from "../../public/flowerCircle.png";
import Image from "next/image";
import Link from "next/link";
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
    const response = await fetch("http://localhost:8080/graphql", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(graphqlQuery),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

function page() {
  const router = useRouter();

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const { data } = await signup(event);
    localStorage.setItem("email", data.signup.email);
    localStorage.setItem("_id", data.signup._id);
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
          <Image
            src={flowerCircle}
            alt="flower circle"
            width={850} // Increase the width
            height={850} // Increase the height
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
              className="text-primary p-1 sm:p-2 rounded-full mb-2 w-7/10 sm:w-8/10 md:w-9/10"
            />
            <label className="text-text">Password</label>
            <input
              type="password"
              name="password"
              className="text-primary p-1 sm:p-2 rounded-full mb-2 w-7/10 sm:w-8/10 md:w-9/10"
            />
            <label className="text-text">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="text-primary p-1 sm:p-2 rounded-full mb-2 w-7/10 sm:w-8/10 md:w-9/10"
            />
            <div className="flex flex-col items-center gap-y-4">
              <button
                type="submit"
                className="mt-6 w-[40%] bg-primary text-text p-2 rounded-full hover:bg-accent hover:text-white transition-all"
              >
                Signup
              </button>
              <div className="flex justify-center gap-x-4">
                <p>Already have an Account</p>
                <Link href="/login" className="">Login</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default page;
