"use client";
import React from "react";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import { useInView } from "react-intersection-observer";
import GetProfilePosts from "@/ServerActions/GetProfilePosts";

function LoadMorePosts(userId, ) {
  const [pagesLoaded, setPagesLoaded] = useState(1);
  const { ref, inView } = useInView();
  const profilePosts = async ()=>{
    const nextPage = pagesLoaded+1;
    const newPosts = await GetProfilePosts()
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
