import React from "react";
import Comment from "./Comment";
import LoadMoreComments from "./LoadMoreComments";

export default function Comments(props) {
  console.log("Comments data", props.commentsData);
  return (
    <div className="max-h-[20rem] overflow-y-auto  mt-4">
      {props.newComments.length > 0
        ? props.newComments.map((commentData) => (
            <Comment commentData={commentData} key={Math.random()} />
          ))
        : null}
      {props.renderCommentSec ? (
        props.commentsData.length > 0 ? (
          props.commentsData.map((comment) => (
            <Comment commentData={comment} key={Math.random()} />
          ))
        ) : (
          <h1>No Comments</h1>
        )
      ) : null}

      {props.renderCommentSec ? (
        props.commentsData.length > 0 ? (
          <LoadMoreComments
            renderCommentSec={props.renderCommentSec}
            postId={props.postId}
            userId={props.userId}
            token={props.token}
            setCommentsData={props.setCommentsData}
            setCommentPageLoaded={props.setCommentPageLoaded}
            commentPageLoaded={props.commentPageLoaded}
            commentsData={props.commentsData}
          />
        ) : null
      ) : null}
    </div>
  );
}
