"use client";
import React from "react";
import Link from "next/link";
import Head from "next/head";
import cookie from "cookie-cutter";
import Image from "next/image";
import logo from "../../public/logo.png";
import { usePathname, useRouter } from "next/navigation";

function Nav() {
  const pathName = usePathname();
  const router = useRouter();
  const userId = cookie.get("userId");


  // List of routes where you want to hide the navigation
  const routesWithoutNavigation = ["/login", "/signup", "/profile-data-input"];

  const shouldRenderNavigation = !routesWithoutNavigation.includes(pathName);
  const onBtnClickHandler = () => {
    cookie.set("token", "");
    cookie.set("userId", "");
    cookie.set("email", "");
    cookie.set("name", "");
    cookie.set("profilePicUrl", "");
    router.replace("/login");
  };
  return (
    <>
      {shouldRenderNavigation && (
        <>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, viewport-fit=cover"
            />
          </Head>
          <nav className="bg-text w-full fixed bottom-0 lg:bottom-[100%] lg:top-0  z-40 text-primary flex justify-around lg:justify-between w-auto gap-10 p-5 h-[55px] lg:h-[70px] shadow-xl">
            <div className="hidden lg:flex gap-x-4 items-center ml-4">
              <Image
                src={logo}
                alt="logo"
                width={50}
                height={50}
                className="mx-auto bg-primary rounded-[10px] shadow-lg border-1 border-solid border-text p-2"
              />
              <h2 className=" text-accent text-lg font-bold text-center ">
                Art Nest
              </h2>
            </div>

            <div className="text-md lg:text-lg flex gap-x-6 items-center w-full lg:w-fit justify-around">
              <Link href="/" className="mr-4 flex gap-x-1">
                <Image width={25} height={25} alt="icon" src="/homeIcon.png" />
                Home
              </Link>

              <Link
                href={`/profile/${userId}`}
                className="mr-4 active:bg-accent flex gap-x-1"
              >
                <Image width={25} height={25} alt="icon" src="/userIcon.png" />
                Profile
              </Link>

              <button
                type="button"
                className="mr-4 text-primary bg-accent border-none"
                onClick={onBtnClickHandler}
              >
                Logout
              </button>
            </div>
          </nav>
        </>
      )}
    </>
  );
}
export default Nav;
