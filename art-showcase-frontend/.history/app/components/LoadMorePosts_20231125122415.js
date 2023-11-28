"use client";
import React from "react";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import { useInView } from "react-intersection-observer";

function LoadMorePosts() {
  const [pagesLoaded, setPagesLoaded] = useState(1);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      console.log("To the end");
    }
  }, [inView]);
  return (
    <>
      <div>
        <Spinner />
      </div>
    </>
  );
}

export default LoadBtn;
