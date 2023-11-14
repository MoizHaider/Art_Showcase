"use client"
import React from "react";
import CommentsSectionBtns from "./CommentsSectionBtns";
import Comment from "./Comment";
function CommentSection() {
  return (
    <>
      <CommentsSectionBtns />
      <div><Comment/></div>

    </>
  );
}

export default CommentSection;
