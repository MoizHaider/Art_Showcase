"use client";
import React from "react";
import { useState } from "react";
function PostBtns(props) {
  //recieve post id as props
  //use state to change the sate
  //use useeffect to pass the state as a dependecy and then add a post request to update the data in db
  const [toggleComments, setToggleComments] = useState("false");
  const onLikeClickHandler = () => {};
  const onCommentClickHandler = () => {};
  const onSaveClickHandler = () => {};
  return (
    <div className="flex justify-around w-[100%] ">
      <div>
        <button type="button" onClick={onLikeClickHandler}>
          Like
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
