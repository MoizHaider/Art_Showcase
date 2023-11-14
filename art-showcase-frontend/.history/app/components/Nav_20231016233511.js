"use client";
import React from "react";
import Link from "next/link";

function Nav() {
  const onBtnClickHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
  };
  return (
    <>
    
      <nav className="flex justify-center w-auto gap-10 p-5 bg-red-400 text-white">
        <Link href="/">Home</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/admin">Admin</Link>
        <Link href="/login">Login</Link>
        <Link href="/signup">Signup</Link>
        <button type="button" onClick={onBtnClickHandler}>
          Logout
        </button>
      </nav>
    </>
  );
}
export default Nav;
