"use client";
import React from "react";
import CommentsSectionBtns from "./CommentsSectionBtns";
import Comment from "./Comments";
function CommentSection() {
  return (
    <>
      <CommentsSectionBtns />
      <div>
        <Comments />
      </div>
    </>
  );
}

export default CommentSection;
