"use client";
import React from "react";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import { useInView } from "react-intersection-observer";
import GetProfilePosts from "@/ServerActions/GetProfilePosts";

function LoadMorePosts(token, userId, location) {
  const [profilePagesLoaded, setProfilePagesLoaded] = useState(1);
  const [homePagesLoaded, setHomePagesLoaded] = useState(1);
  const [profilePosts, setProfilePosts] = useState();
  const [homePosts, setHomePosts] = useState();

  const { ref, inView } = useInView();
  const profilePostsFun = async ()=>{
    const nextPage = pagesLoaded+1;
    const newPosts = await GetProfilePosts(nextPage, token, userId) ?? [];
    setProfilePosts(posts=>{
      return [...posts,...newPosts]

    })

  }
  useEffect(() => {
    console.log("Load More")
    if (inView) {
      console.log("To the end");
    }
  }, [inView]);
  return (
    <>
      <div ref = {ref}>
        <Spinner />
      </div>
    </>
  );
}

export default LoadMorePosts;
