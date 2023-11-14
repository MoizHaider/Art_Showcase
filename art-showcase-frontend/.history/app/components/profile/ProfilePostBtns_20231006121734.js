import React from "react";
import { useState } from "react";

function ProfilePostBtns(props) {
  const createPostHandler = () => {
    props.setRenderAddPostSec(true);
  };
  return (
    <div>
      <button type="button">Posts</button>
      <button type="button">Saved</button>
      <button type="button" onClick={createPostHandler}>
        Create Post
      </button>
    </div>
  );
}

export default ProfilePostBtns;
