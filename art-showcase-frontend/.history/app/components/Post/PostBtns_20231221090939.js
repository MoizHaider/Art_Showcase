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
    ? "fill-red-300 border-none"
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
            stroke-width="3"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            className={`${heartFill} w-[40px] h-[40px]`}
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          <div>{likesCount} likes</div>
        </button>
        <button type="button" className = "border-none mb-5" onClick={onCommentClickHandler}>
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          // style="enable-background:new 0 0 512 512"
          xmlSpace="preserve"
          className = "w-[40px] h-[40px]"
          strokeWidth="2"
        >
          <g>
            <path
              d="M105.4,496.9H75.3l18.1-24.1c12-16.6,19.6-37.6,24.1-63.2C42.2,375,0,310.2,0,225.9C0,96.4,97.9,15.1,256,15.1
		        s256,81.3,256,210.8c0,132.5-96.4,210.8-256,210.8h-10.5C221.4,465.3,179.2,496.9,105.4,496.9z M256,45.2
		c-141.6,0-225.9,67.8-225.9,180.7c0,96.4,58.7,141.6,108.4,161.1l10.5,4.5l-1.5,12c-3,24.1-7.5,45.2-16.6,63.3
		c49.7-6,78.3-31.6,94.9-52.7l4.5-6H256c203.3,0,225.9-126.5,225.9-180.7C481.9,112.9,397.6,45.2,256,45.2z"
            />
          </g>
        </svg>
        </button>
      </div>

    </div>
  );
}

export default PostBtns;
