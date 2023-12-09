"use client";
import React from "react";
import Comments from "./Comments";
import { useState } from "react";
import { useSelector } from "react-redux";

function CommentSection(props) {
  const [newComments, setNewComments] = useState([]);
  const userData = useSelector((state) => state.authReducer.userData);
  

  const addClickHandler = (event) => {

    event.preventDefault();
    console.log("")
    const commentsData = {
      text: event.currentTarget.comment.value,
      userData: userData,
    };
    setNewComments(prevComments=> [commentsData, ...prevComments])
  };
  console.log("Comments ", newComments);

  return (
    <>
      <form onSubmit={addClickHandler}>
        <input type="text" placeholder="Add a Comment" name="comment" />
        <button type="submit" onClick={addClickHandler}>
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
