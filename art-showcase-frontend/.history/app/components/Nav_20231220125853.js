"use client";
import React from "react";
import Link from "next/link";
import Head from "next/head";
import cookie from "cookie-cutter";
import Image from "next/image";
import logo from "../../public/logo.png";
import { useRouter } from "next/navigation";

function Nav() {
  const router = useRouter();

  // List of routes where you want to hide the navigation
  const routesWithoutNavigation = ['/login', '/signup', '/profile-data-input'];

  const shouldRenderNavigation = !routesWithoutNavigation.includes(router.pathname);
  const onBtnClickHandler = () => {
    cookie.set("token", "");
    cookie.set("userId", "");
    cookie.set("email", "");
    cookie.set("name", "");
    cookie.set("profilePicUrl", "");
  };
  return (

    <>
    {shouldRenderNavigation && }

    </>
  );
}
export default Nav;
