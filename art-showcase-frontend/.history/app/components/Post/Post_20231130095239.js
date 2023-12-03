import React from "react";
import PostBtns from "./PostBtns";
import CommentSection from "./CommentSection";
import cookie from "cookie-cutter";
import Image from "next/image";
function Post(props) {
  //render list of data revieved from page.js
  const token = props.token;
  let imgUrl;
  if (props.server) {
    imgUrl = "http://localhost:8080/" + props.urls[0];
  } else {
    imgUrl = props.urls[0];
  }

  return (
    <div className="w-[60em] py-[0em] flex justify-center  justify-self-center">
      <div className="flex flex-col justify-center items-center px-[1em] py-[1.5em] bg-white ">
        <div className="mb-[1em] border-[2px] border-black">
          <div>UserName</div>
          <span>Img</span>
        </div>

        <Image
          src={imgUrl}
          alt=""
          width={550}
          height={550}
          className="rounded-[10px] border-[2px] border-black"
        />

        <PostBtns
          likesCount={props.likesCount}
          commentsCount={props.commentsCount}
          liked={props.liked}
          postId  ={props.postId}
          
        />

        <div className="mt-[1em]">
          <div className="w-auto font-bold text-xl">{props.title}</div>
          <div className="w-auto text-lg">{props.description}</div>
        </div>
        <div className="w-[100%] h-[3px] bg-pink-300 mb-[3em] mt-[4em]"></div>
      </div>
    </div>
  );
}

export default Post;
