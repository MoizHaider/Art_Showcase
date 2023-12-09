"use client";
import React from "react";
import CommentsSectionBtns from "./CommentsSectionBtns";
import Comments from "./Comments";
import { useSelector } from "react-redux";
function CommentSection() {
  const renderCommentsSec = useSelector((state) => state.postReducer.renderCommentSec)
  console.log("Comments",renderCommentsSec)
  return (
    <>
      <CommentsSectionBtns />
     {renderCommentsSec?? <div>
        <Comments/>
      </div>}
    </>
  );
}

export default CommentSection;
