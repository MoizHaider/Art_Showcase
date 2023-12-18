import React from "react";
import Comment from "./Comment";
import LoadMoreComments from "./LoadMoreComments";

export default function Comments(props) {
  return (
    <>
      {props.commentsData > 0
        ? props.commentsData.map((comment) => <Comment />)
        : null}
        <LoadMoreComments/>
    </>
  );
}
