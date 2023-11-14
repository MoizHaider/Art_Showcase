"use client";
import { useState } from "react";
import React from "react";
import PostBtns from "./PostBtns";
import CommentSection from "./CommentSection";

function TrendingPosts(props) {
  //render list of data revieved from page.js
  const token = localStorage.getItem("token");
  const likeQuery = {
    query: `
      mutation likePost($postId: ID!, $userData: userDataInput!  ){
        likePost(postId: $postId, userData: $userData)
      }
    `,
    variables:{
      postId: props.postId,
      userData:{
        _id: props.userData._id,
        name: props.userData.name,
        profilePicUrl: props.userData.profilePicUrl,
        backgroundImgUrl: props.userData.backgroundImgUrl
      }
    }
  };
  const likeHandler = ()=>{
    
    fetch("http://localhost:8080/graphql", {
      method: "post",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(likeQuery),
    }).then(res=>res.json()).then(result=>{
      console.log(result);
    })
  }
  console.log(props.urls)
  const imgUrl = "http://localhost:8080/"+props.urls[0];
  return (
    <div className="border-[2px] border-solid border-gray-700 p-7 rounded-[20px] w-[100%] bg-red-100 flex justify-center">
      <div className="flex flex-col justify-center items-center w-[50%] bg-blue-300 p-3 rounded-[10px]">
        <img src={imgUrl} alt="" className = "w-100%"/> 
        <div className="w-[100%]">
          <div className="w-auto">{props.title}</div>
          <div className="w-auto">{props.description}</div>
        </div>
        <PostBtns likeHandler = {likeHandler} />
      </div>
    </div>
  );
}

export default TrendingPosts;
