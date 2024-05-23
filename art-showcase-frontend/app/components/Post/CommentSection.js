"use client";
import React from "react";
import Comment from "./Comment";
import { useState } from "react";
import cookie from "cookie-cutter";
import AddComment from "@/ServerActions/AddComment";

function CommentSection(props) {
  const name = cookie.get ? cookie.get("name") : null;
  const _id = cookie.get ? cookie.get("userId") : null;
  const profilePicUrl = cookie.get ? cookie.get("profilePicUrl") : null;
  const [comment, setComment] = useState()


  const addClickHandler = async (event) => {
    event.preventDefault();
    
    const text = event.currentTarget.comment.value;
    const commentId = await AddComment(
      props.token,
      props.postId,
      _id,
      text,
      props.newComments
    );
    const commentsData = {
      commentId,
      text,
      userData: {
        _id,
        name,
        profilePicUrl,
      },
    };
    setComment("")
   props.setNewComments((prevComments) => {
      if (!Array.isArray(prevComments)) {
        return [commentsData];
      }
      return [commentsData, ...prevComments];
    });
  }
  return (
    <>
      <div className="space-y-4">
        <form
          onSubmit={addClickHandler}
          className="flex space-x-2 sm:space-x-4"
        >
          <input
            type="text"
            placeholder="Add a Comment"
            name="comment"
            className="flex-1 p-2 text-sm md:text-lg  border border-gray-300 rounded-full "
            value = {comment}
            onChange={(e)=>{setComment(e.target.value)}}
          />
          <button
            type="submit"
            className="bg-primary text-sm md:text-lg hover:bg-accent hover:text-white px-4 py-1 md:px-4 md:py-2 rounded-full"
          >
            Post
          </button>
        </form>
      </div>
    </>
  );
}

export default CommentSection;
