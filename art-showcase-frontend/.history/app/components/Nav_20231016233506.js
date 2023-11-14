"use client"
import React from "react";
import Link from "next/link";

function Nav() {
  const onBtnClickHandler = ()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("userId")
  }
  return (
    <>
    
    </>

  );
}
export default Nav;
