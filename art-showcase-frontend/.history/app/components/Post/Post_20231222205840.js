"use client";
import React, { useState, useRef } from "react";
import PostBtns from "./PostBtns";
import CommentSection from "./CommentSection";
import Image from "next/image";
import Comments from "./Comments";

function Post(props) {
  //render list of data revieved from page.js
  console.log("posts ", props);
  const token = props.token;
  const imgRef = useRef();
  const [isLandscape, setIsLandscape] = useState(null);

  const [renderCommentSec, setRenderCommentSec] = useState(false);
  const [newComments, setNewComments] = useState([]); //Front-end Comments Data
  const [commentsData, setCommentsData] = useState([]);
  const [commentPageLoaded, setCommentPageLoaded] = useState(1);
  console.log("backend comments data ", commentsData);
  let imgUrl;
  if (props.server) {
    imgUrl = "http://localhost:8080/" + props.urls[0];
  } else {
    imgUrl = props.urls[0];
  }
  let profilePicUrl;
  if (props.server) {
    profilePicUrl = "http://localhost:8080/" + props.userData.profilePicUrl;
  } else {
    profilePicUrl = props.userData.profilePicUrl;
  }
  const handleImageLoad = () => {
    const imgElement = imgRef.current;
    const { naturalWidth, naturalHeight } = imgElement;
    const landscape = naturalWidth > naturalHeight;
    setIsLandscape(landscape);
  };

  const imageWidth = isLandscape ? 700 : 550;
  return (
    <div
      className={`max-w-screen-lg mx-auto flex justify-center w-[${imageWidth}px`}
    >
      <div
        className={`flex flex-col gap-y-3 px-4 py-6 bg-white w-[${imageWidth}px]`}
      >
        <div className="w-[100%] bottom-0">
          <div
            className={`mb-2  w-[${imageWidth}px] flex justify-start gap-x-4 items-center`}
          >
            <Image
              src={profilePicUrl}
              alt="profilePic"
              width={40}
              height={30}
              className="rounded-full border-[1.5px] border-solid border-text"
            />
            <p className={`font-bold text-lg `}>{props.userData.name}</p>
          </div>
        </div>

        <div className="w-[100%] flex justify-center">
          <Image
            src={imgUrl}
            alt=""
            width={imageWidth}
            height={550}
            className="rounded-md border-2 border-black bg-gray-300"
            onLoad={handleImageLoad}
            ref={imgRef}
          />
        </div>

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
          className={`w-${imageWidth} mt-0`}
        />
        <div className="w-[100%]">
          <div className={`w-[${imageWidth}px] flex flex-col items-start`}>
            <div className="font-bold text-xl">{props.title}</div>
            <div className="text-lg">{props.description}</div>
          </div>
        </div>

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
            newComments={newComments}
          />
        </div>

        <CommentSection
          renderCommentSec={renderCommentSec}
          token={props.token}
          postId={props.postId}
          setNewComments={setNewComments}
          newComments = {}
        />

        <div className="w-full h-1 bg-pink-300 my-4 mt-10"></div>
      </div>
    </div>
  );
}

export default Post;
