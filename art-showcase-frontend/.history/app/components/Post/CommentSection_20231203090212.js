"use client";
import React from "react";
import CommentsSectionBtns from "./CommentsSectionBtns";
import Comments from "./Comments";
function CommentSection() {
  return (
    <>
      <button>View all </button>
      <CommentsSectionBtns />
      <div>
        <Comments/>
      </div>
    </>
  );
}

export default CommentSection;
