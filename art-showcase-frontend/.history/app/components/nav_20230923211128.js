import React from "react";
import Link from "next/link";
import Nav from "./components/nav"

function nav() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/admin">Admin</Link>
    </nav>
  );
}
export default nav;
