"use client";
import React, { useState, useRef } from "react";
import PostBtns from "./PostBtns";
import CommentSection from "./CommentSection";
import Image from "next/image";
import Comments from "./Comments";
import Link from "next/link";

function Post(props) {
  //render list of data revieved from page.js
  const token = props.token;
  const imgRef = useRef();
  const [isLandscape, setIsLandscape] = useState(null);
  const [imageWidth, setImgWidth] = useState(0);
  const [renderCommentSec, setRenderCommentSec] = useState(false);
  const [newComments, setNewComments] = useState([]); //Front-end Comments Data
  const [commentsData, setCommentsData] = useState([]);
  const [commentPageLoaded, setCommentPageLoaded] = useState(1);

  let imgUrl;

  imgUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/` + props.urls[0];

  let profilePicUrl;

  profilePicUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/` + props.userData.profilePicUrl;

  const handleImageLoad = () => {
    const imgElement = imgRef.current;
    const { naturalWidth, naturalHeight } = imgElement;
    const landscape = naturalWidth > naturalHeight;
    setImgWidth(landscape ? 700 : 550);
    setIsLandscape(landscape);
  };
console.log("profile Props",props);
  return (
    <div className={`w-full lg:w-auto flex justify-center`}>
      <div className={`flex flex-wrap flex-col gap-y-2 md:gap-y-2 px-4 py-6 bg-white w-full max-w-[95%] sm:max-w-[90%]  md:w-[700px]`}>
        <div className="w-[100%] bottom-0">
          <Link
            href = {`/profile/${props.userData._id || props.userId}`}
            className={`mb-2 rounded-full flex justify-start gap-x-4 items-center`}
          >
            <div className="w-[40px] h-[40px]  md:w-[50px] md:h-[50px] rounded-full">
              <Image
                src={profilePicUrl}
                alt="profilePic"
                width={50}
                height={50}
                className="w-full h-full object-cover rounded-full border-[2px] border-solid border-text"
              />
            </div>
            <div>
              {" "}
              <p className={`font-bold  text-md md:text-xl`}>{props.userData.name}</p>
              <p className={`text-sm md:text-lg" text-gray-500`}>{props.creationDate}</p>
            </div>
          </Link>
        </div>

        <div className="w-[100%] max-h-[300px] md:max-h-[400px] max-w-[700px] flex justify-center  rounded-[10px]">
          <Image
            src={imgUrl}
            alt="image"
            width={500}
            height={500}
            className="w-full border-none object-cover shadow-[0px_0px_10px_black]"
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
          className={`mt-0`}
          newComments={newComments}
        />
        <div className="w-[100%]">
          <div className={`flex flex-col items-start`}>
            <div className="font-bold text-md md:text-xl">{props.title}</div>
            <div className="text-sm md:text-lg">{props.description}</div>
          </div>
        </div>

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

        <CommentSection
          renderCommentSec={renderCommentSec}
          token={props.token}
          postId={props.postId}
          setNewComments={setNewComments}
          newComments={newComments}
        />

        <div className="w-full h-1 bg-pink-300 my-4 mt-10"></div>
      </div>
    </div>
  );
}

export default Post;
