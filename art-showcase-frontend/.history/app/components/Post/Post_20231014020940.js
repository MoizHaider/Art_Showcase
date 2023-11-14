"use client";
import { useState } from "react";
import React from "react";
import PostBtns from "./PostBtns";
import CommentSection from "./CommentSection";

function TrendingPosts(props) {
  //render list of data revieved from page.js
  return (
    <div className="border-[2px] border-solid border-gray-700 p-7 rounded-[20px] w-[100%] bg-red-100">
      <div className="flex flex-col justify-center items-center">
        <div className="w-[100%]">
          <div className="w-auto">{props.title}</div>
          <div className="w-auto">{props.description}</div>
        </div>
        <PostBtns />
      </div>
    </div>
  );
}

export default TrendingPosts;
