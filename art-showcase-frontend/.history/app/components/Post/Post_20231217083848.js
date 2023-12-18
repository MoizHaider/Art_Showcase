"use client";
import React, { useState } from "react";
import PostBtns from "./PostBtns";
import CommentSection from "./CommentSection";
import Image from "next/image";
import Comments from "./Comments";

function Post(props) {
  //render list of data revieved from page.js
  const token = props.token;
  const [renderCommentSec, setRenderCommentSec] = useState(false);
  const [commentsData, setCommentsData] = useState([]);
  const [commentPageLoaded, setCommentPageLoaded] = useState(1);
  console.log("backend comments data ", commentsData);
  let imgUrl;
  if (props.server) {
    imgUrl = "http://localhost:8080/" + props.urls[0];
  } else {
    imgUrl = props.urls[0];
  }

  return (
<div className="max-w-screen-lg mx-auto py-6 flex justify-center">
  <div className="flex flex-col items-center px-4 py-6 bg-white border-2 border-black rounded-lg">
    <div className="mb-2 border-b-2 border-black">
      <div className="font-bold text-lg">UserName</div>
      <span>Img</span>
    </div>

    <Image
      src={imgUrl}
      alt=""
      width={550}
      height={550}
      className="rounded-md border-2 border-black bg-red-300"
    />

    <PostBtns
      likesCount={props.likesCount}
      commentsCount={props.commentsCount}
      liked={props.liked}
      postId={props.postId}
      userId={props.userId}
      token={props.token}
      setRenderCommentSec={setRenderCommentSec}
      renderCommentSec={renderCommentSec}
      setCommentsData={setCommentsData}
      setCommentPageLoaded={setCommentPageLoaded}
    />

    <div className="mt-4">
      <div className="font-bold text-xl">{props.title}</div>
      <div className="text-lg">{props.description}</div>
    </div>

    {renderCommentSec && (
      <div className="mt-4">
        <Comments
          renderCommentSec={renderCommentSec}
          commentsData={commentsData}
          postId={props.postId}
          userId={props.userId}
          token={props.token}
          setCommentsData={setCommentsData}
          setCommentPageLoaded={setCommentPageLoaded}
          commentPageLoaded={commentPageLoaded}
        />
      </div>
    )}

    <CommentSection
      renderCommentSec={renderCommentSec}
      token={props.token}
      postId={props.postId}
    />

    <div className="w-full h-2 bg-pink-300 my-4"></div>
  </div>
</div>

  );
}

export default Post;
