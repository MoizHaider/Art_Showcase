"use client";
import React from "react";
import Comments from "./Comments";

function CommentSection() {

  console.log(renderCommentsSec);
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
          {<Comments />
        </div>
      )}
    </>
  );
}

export default CommentSection;
