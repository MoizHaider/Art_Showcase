"use client";
import React, { useState, useRef } from "react";
import PostBtns from "./PostBtns";
import CommentSection from "./CommentSection";
import Image from "next/image";
import Comments from "./Comments";

function Post(props) {
  //render list of data revieved from page.js
  const token = props.token;
  const imgRef = useRef();
  const [isLandscape, setIsLandscape] = useState(null);

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
  const handleImageLoad = () => {
    const imgElement = imgRef.current;
    const { naturalWidth, naturalHeight } = imgElement;
    const landscape = naturalWidth > naturalHeight;
    setIsLandscape(landscape);
  };

  const imageWidth = isLandscape ? 700 : 550;
  return (
    <div
      className={`max-w-screen-lg mx-auto py-6 flex justify-center w-[${imageWidth}px`}
    >
      <div className={`flex flex-col  px-4 py-6 bg-white w-[${imageWidth}px]`}>
        <div className = "w-[100%]">
          <div className={`mb-2  w-[700px] flex justify-start`}>
            <p>Img</p>
            <p className={`font-bold text-lg `}>UserName</p>
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
          className={`w-${imageWidth}`}
        />

        <div className={`w-[${imageWidth}px]`}>
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
