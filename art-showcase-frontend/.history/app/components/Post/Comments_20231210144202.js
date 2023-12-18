import React from "react";
import Comment from "./Comment";
import LoadMoreComments from "./LoadMoreComments";

export default function Comments(props) {
  return (
    <>
      {props.commentsData > 0
        ? props.commentsData.map((comment) => <Comment commentData={comment} />)
        : null}
      <LoadMoreComments
        renderCommentSec={props.renderCommentSec}
        postId={props.postId}
        userId={props.userId}
        token={props.token}
        setCommentsData={props.setCommentsData}
        setCommentPageLoaded={setCommentPageLoaded}
        commentPageLoaded={commentPageLoaded}
      />
    </>
  );
}
