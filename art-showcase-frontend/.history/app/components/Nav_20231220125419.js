"use client";
import React from "react";
import Link from "next/link";
import Head from "next/head";
import cookie from 'cookie-cutter';
import Image from "next/image"
import logo from "../../public/logo.png"


function Nav() {
 
  const onBtnClickHandler = () => {
    cookie.set("token", "");
    cookie.set("userId", "");
    cookie.set("email", "");
    cookie.set("name", "")
    cookie.set("profilePicUrl", "")
  };
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
      </Head>
      <nav className="flex justify-center w-auto gap-10 p-5">

        <Link href="/">Home</Link>
        <Link href="/profile">Profile</Link>
        <button type="button" onClick={onBtnClickHandler}>
          Logout
        </button>
      </nav>
    </>
  );
}
export default Nav;
