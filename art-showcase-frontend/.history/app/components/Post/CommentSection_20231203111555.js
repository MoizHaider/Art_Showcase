"use client";
import React from "react";
import Comments from "./Comments";

function CommentSection(props) {


  return (
    <>
      <div>
        <input type="text" placeholder="Add a Comment" />
        <button type="button">
          Add
        </button>
      </div>
      {renderCommentsSec ?? (
        <div>
          {props.renderCommentSec??<Comments />}
        </div>
      )}
    </>
  );
}

export default CommentSection;
