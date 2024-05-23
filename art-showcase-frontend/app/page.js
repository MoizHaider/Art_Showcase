import Image from "next/image";
import styles from "./page.module.css";


import LoadMorePosts from "./components/LoadMorePosts";
import SearchSection from "./components/SearchSection";
import { cookies } from "next/headers";
import Post from "./components/Post/Post";
import GetHomePosts from "@/ServerActions/GetHomePosts";

import { redirect } from "next/navigation";


export default async function Home() {
//------------------ not logged in redirect logic ------------------------------------------------

let isToken =  cookies().get("token");
  if (!isToken) {
    redirect("/login");
  }
  const isTokenVal = cookies().get("token").value;
  if (!isTokenVal) {
    // Redirect user to login page
    redirect("/login");
  }

//------------------------------------------------------------------------------------------------
 
  const token = cookies().get("token").value;
  const userId = cookies().get("userId").value;
  const email = cookies().get("email").value;
  const noOfPosts = 20;
  let homeLoadData = await GetHomePosts(userId, 1, token, true);
  const homePosts = homeLoadData.posts;

  return (
    <div className="grid mt-[50px] lg:mt-[70px] bg-white grid-cols-1 lg:grid-cols-3">
      {/* Search Section Sidebar */}
      <aside className="z-40 md:z-10 bg-gray-800 flex justify-between items-center lg:block lg:col-span-1 fixed lg:sticky top-0 lg:top-[70px]  lg:h-screen  p-2 sm:p-4 w-full h-[60px] sm:h-[70px] lg:w-[85%] xl:w-[85%]">
        <div className="block lg:hidden flex gap-x-4 items-center ml-4">
          <Image
            src="/logo.png"
            alt="logo"
            width={50}
            height={50}
            className="mx-auto w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] bg-primary rounded-[10px] shadow-lg border-1 border-solid border-text p-2"
          />
          <h2 className=" text-accent hidden sm:block md:text-lg font-bold text-center ">
            Art Nest
          </h2>
        </div>
        <SearchSection />
      </aside>

      {/* Main Content */}
      <main className="p-0 grid lg:col-span-2 lg:w-[95%]">
        {homePosts.length > 0
          ? homePosts.map((post) => (
              <Post
                server={true}
                userData={post.user}
                postId={post._id}
                title={post.title}
                description={post.description}
                likesCount={post.likesCount}
                creationDate={post.creationDate}
                commentsCount={post.commentsCount}
                urls={post.urls}
                key={post._id}
                token={token}
                liked={post.liked}
                userId={userId}
              />
            ))
          : null}
        <LoadMorePosts token={token} userId={userId} location="home" />
      </main>

      {/* Copyright Footer */}
      <footer className="lg:col-span-3">Copyright material</footer>
    </div>
  );
}
