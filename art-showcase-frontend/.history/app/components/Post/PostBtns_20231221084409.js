"use client";
import React, { use, useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
import heart from "../../../public/heartIcon.svg";
import LikePost from "@/ServerActions/LikePost";
import getComments from "@/ServerActions/getComments";

function PostBtns(props) {
  //recieve post id as props
  //use state to change the sate
  //use useeffect to pass the state as a dependecy and then add a post request to update the data in db
  const [isLiked, setIsLiked] = useState(props.liked); //do check when a post is rendered wheater the user liked it previously or not
  const [likesCount, setLikesCount] = useState(props.likesCount);

  const onLikeClickHandler = () => {
    if (!isLiked) {
      setLikesCount((prevCount) => prevCount + 1);
    } else {
      setLikesCount((prevCount) => prevCount - 1);
    }
    LikePost(props.token, props.postId, props.userId, isLiked);
    setIsLiked((prevIsLiked) => !prevIsLiked);
  };
  const onCommentClickHandler = async () => {
    const renderComments = !props.renderCommentSec;
    props.setRenderCommentSec((preVal) => !preVal);
    if (renderComments) {
      const comments = await getComments(
        props.token,
        props.postId,
        props.userId,
        1
      );
      //console.log("New fetch comments ", comments)
      props.setCommentsData((prevComments) => [...prevComments, ...comments]);
    } else {
      props.setCommentsData([]);
      props.setCommentPageLoaded(1);
    }
  };
  const heartFill = isLiked
    ? "fill-red-500"
    : "stroke-black stroke-[1px] fill-white";
  const onSaveClickHandler = () => {};
  return (
    <div className="flex justify-between w-[100%] mt-[2em]">
      <div className="flex gap-x-3">
        <button
          type="button"
          onClick={onLikeClickHandler}
          className="border-none"
        >
          <svg
            class="feather feather-heart"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            className = {fillHe}
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          <div>{likesCount} likes</div>
        </button>
        <button type="button" onClick={onCommentClickHandler}>
          Comment
        </button>
      </div>
      <button type="button" onClick={onSaveClickHandler}>
        Save
      </button>
    </div>
  );
}

export default PostBtns;
