
import React from "react";
import Nav from "../components/Nav"
import Post from "../components/Post/Post"
import LoadMorePosts from "../components/Post/LoadMorePosts"

function page() {
  return (
    <>
      <header>Pic area</header>
      <span>
        User Info
      </span>
        <main>
            <Post type = "userPosts"/>
            <LoadMorePosts type = "usePosts"/>
        </main>
    </>
  );
}
export default page;
