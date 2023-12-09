"use client";
import React from "react";
import Comment from "./Comment";
import { useState } from "react";
import { useSelector } from "react-redux";

function CommentSection(props) {
  const [newComments, setNewComments] = useState([]);
  

  const addClickHandler = (event) => {

    event.preventDefault();
    const commentsData = {
      text: event.currentTarget.comment.value,
      userData: userData,
    };
    setNewComments(prevComments=> [commentsData, ...prevComments])
    console.log("user di", userData)
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
        return <Comment text = {commentData.text} name = {commentData.userData.name} profilePicUrl = {commentData.userData.profilePicUrl}/>
      }):null}

      {props.renderCommentSec ? (
        <div>
          <Comment />
        </div>
      ) : null}
    </>
  );
}

export default CommentSection;
