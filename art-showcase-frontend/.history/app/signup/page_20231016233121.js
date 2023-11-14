"use client";
import React, { useEffect } from "react";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

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
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

function page() {
  const router = useRouter();

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const { data } = await signup(event);

    sessionStorage.setItem("email", data.signup.email);
    sessionStorage.setItem("_id", data.signup._id);

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
      <form
        onSubmit={onSubmitHandler}
        className="flex justify-center items-center h-screen"
      >
        <div className="grid gap-y-1 bg-gradient-to-r from-purple-300 via-pink-400 to-red-400 p-20 h-[80%] max-h-[400px] jutify-center items-center rounded-[20px]">
          <label for="email">Email</label>
          <input type="email" name="email" />
          <label for="password">Password</label>
          <input type="password" name="password" />
          <label for="confirmPassword">Confirm Password</label>
          <input type="password" name="confirmPassword" />
          <button type="submit" className="mt-10">
            Signup
          </button>
        </div>
      </form>
    </>
  );
}

export default page;
