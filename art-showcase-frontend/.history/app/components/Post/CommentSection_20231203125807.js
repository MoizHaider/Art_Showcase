"use client";
import React from "react";
import Comments from "./Comments";

function CommentSection(props) {
  const [newComments, setNewComments] = useState
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
      : null}
    </>
  );
}

export default CommentSection;
