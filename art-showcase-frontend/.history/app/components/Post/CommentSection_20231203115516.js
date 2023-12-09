"use client";
import React from "react";
import Comments from "./Comments";

function CommentSection(props) {
  console.log(props.renderCommentSec)

  return (
    <>
      <div>
        <input type="text" placeholder="Add a Comment" />
        <button type="button">
          Add
        </button>
      </div>
      {props.renderCommentSec ? 
        <div>
          <Comments />
        </div>
      )}
    </>
  );
}

export default CommentSection;
