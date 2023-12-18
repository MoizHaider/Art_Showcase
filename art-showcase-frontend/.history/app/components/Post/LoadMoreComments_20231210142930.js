"use client";
import React from "react";
import { useState, useEffect } from "react";
import Spinner from "../Spinner";
import { useInView } from "react-intersection-observer";
import Comment from "./Comment";

import React from "react";
import getComments from "@/ServerActions/getComments";

export default function LoadMoreComments(props) {
  const [commentPageLoaded, setCommentPageLoaded] = useState(1);
  const [comments, setComments] = useState([]);

  const { ref, inView } = useInView();

  const commentsFun = async () => {
    const nextPage = commentPageLoaded + 1;
    if(po)
    const newCommentsData = await getComments(
      props.tokken,
      props.postId,
      props.userId,
      nextPage
    );
    setCommentPageLoaded((prevPage) => prevPage + 1);
    setComments((prevComments) => [...prevComments, ...newCommentsData]);
  };
  useEffect(() => {
    if (inView) {
      commentsFun();
    }
  }, [inView]);

  return (
    <>
      {comments.length > 0
        ? comments.map((comment) => <Comment commentData={comment}></Comment>)
        : null}
      <div ref={ref}>
        <Spinner />
      </div>
    </>
  );
}
