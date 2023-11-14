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
    <div>
      
    </div>

  );
}

export default PostBtns;
