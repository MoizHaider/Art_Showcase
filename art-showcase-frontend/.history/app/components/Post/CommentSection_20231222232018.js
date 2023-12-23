"use client";
import React from "react";
import Comment from "./Comment";
import { useState } from "react";
import cookie from "cookie-cutter";
import AddComment from "@/ServerActions/AddComment";

function CommentSection(props) {
  const name = cookie.get("name");
  const _id = cookie.get("userId");
  const profilePicUrl = cookie.get("profilePicUrl");

  const addClickHandler = (event) => {
    event.preventDefault();
    const commentsData = {
      commentId: 
      text: event.currentTarget.comment.value,
      userData: {
        _id,
        name,
        profilePicUrl,
      },
    };
    props.setNewComments((prevComments) => [commentsData, ...prevComments]);
    AddComment(
      props.token,
      props.postId,
      _id,
      event.currentTarget.comment.value,
      props.newComments
    );
  };

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
            className="flex-1 p-2 border border-gray-300 rounded-full "
          />
          <button
            type="submit"
            className="bg-primary text-text hover:bg-accent hover:text-white px-4 py-2 rounded-full"
          >
            Post
          </button>
        </form>
      </div>
    </>
  );
}

export default CommentSection;
