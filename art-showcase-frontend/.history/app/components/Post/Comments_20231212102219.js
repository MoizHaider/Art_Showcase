import React from "react";
import Comment from "./Comment";
import LoadMoreComments from "./LoadMoreComments";

export default function Comments(props) {
  return (
    <>
      {props.commentsData > 0
        ? 
        <></>
        : <h1>No Comments</h1>}

    </>
  );
}
