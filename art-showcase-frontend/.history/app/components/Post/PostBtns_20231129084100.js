"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import heart from "../../../public/heart.svg"
function PostBtns(props) {
  //recieve post id as props
  //use state to change the sate
  //use useeffect to pass the state as a dependecy and then add a post request to update the data in db
  const [liked, setLiked]useState(false);
  const [toggleComments, setToggleComments] = useState("false");
  const onLikeClickHandler = () => {};
  const onCommentClickHandler = () => {};
  const onSaveClickHandler = () => {};
  return (
    <div className="flex justify-between w-[100%] mt-[2em]">
      <div className="flex gap-x-3">
        <button type="button" onClick={props.likeHandler} className = "border-none" >
          <Image src = {heart} width = {50} height = {50} className = "-red-500 stroke-black stroke-2" />
        </button>
        <button type="button" onClick={onCommentClickHandler}>
          Comment
        </button>
      </div>
      <button type="button" onClick={onSaveClickHandler}>
        Save
      </button>
      {props.children}
    </div>
  );
}

export default PostBtns;
