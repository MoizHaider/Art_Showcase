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
    const commentsData = {
      text: event.currentTarget.comment.value,
      userData: userData,
    };
    setNewComments(prevComments=> [commentsData, ...prevComments])
  };

  return (
    <>
      <form onSubmit={addClickHandler}>
        <input type="text" placeholder="Add a Comment" name="comment" />
        <button type="submit">
          Add
        </button>
      </form>

      {newComments.length>0 === true? newComments.map(commentData=>{
        return <Comment text = {commentData.text} name = {commentData.userData.name}/>
      }):null}

      {props.renderCommentSec ? (
        <div>
          <Comments />
        </div>
      ) : null}
    </>
  );
}

export default CommentSection;
