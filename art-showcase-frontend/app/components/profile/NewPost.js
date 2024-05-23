"use client";
import React from "react";
import { useSelector } from "react-redux";
import Post from "../Post/Post";
export default function NewPost(props) {
  const postsData = useSelector((state) => state.postReducer.posts);
  console.log("updated state ", postsData)
  console.log("new posts sec ", props.token)

  return (
    <>
      {postsData.length > 0
        ? postsData.map((post) => (
            <Post
              type="userPosts"
              userData={props.userData}
              postId={post._id}
              title={post.title}
              description={post.description}
              likesCount={post.likesCount}
              creationDate={post.creationDate}
              commentsCount={post.commentsCount}
              urls={post.urls}
              key={post._id}
              token={props.token}
            />
          ))
        : null}
    </>
  );
}
