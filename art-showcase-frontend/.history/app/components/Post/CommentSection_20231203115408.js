"use client";
import React from "react";
import Comments from "./Comments";

function CommentSection(props) {
  console.log(props.render)

  return (
    <>
      <div>
        <input type="text" placeholder="Add a Comment" />
        <button type="button">
          Add
        </button>
      </div>
      {props.renderCommentsSec ?? (
        <div>
          <Comments />
        </div>
      )}
    </>
  );
}

export default CommentSection;
