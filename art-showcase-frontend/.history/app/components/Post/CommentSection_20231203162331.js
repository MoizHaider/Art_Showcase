"use client";
import React from "react";
import Comments from "./Comments";
import { useState } from "react";
import { useSelector } from "react-redux";

function CommentSection(props) {
  const [newComments, setNewComments] = useState([]);
  const userData = 
  console.log(props.renderCommentSec);

  const addClickHandler = (event) => {
    event.preventDefault();

  };

  return (
    <>
      <form onSubmit={addClickHandler}>
        <input type="text" placeholder="Add a Comment" />
        <button type="button" onClick={addClickHandler}>
          Add
        </button>
      </form>

      {props.renderCommentSec ? (
        <div>
          <Comments />
        </div>
      ) : null}
    </>
  );
}

export default CommentSection;
