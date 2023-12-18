"use client";
import React from "react";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import { useInView } from "react-intersection-observer";
import GetProfilePosts from "@/ServerActions/GetProfilePosts";
import Post from "./Post/Post";
import GetHomePosts from "@/ServerActions/GetHomePosts";

function LoadMorePosts(props) {
  // Due to some error the tokken field becaame an object containing userId and location fields too
  const [profilePagesLoaded, setProfilePagesLoaded] = useState(1);
  const [homePagesLoaded, setHomePagesLoaded] = useState(1);
  const [profilePosts, setProfilePosts] = useState([]);
  const [homePosts, setHomePosts] = useState([]);

  const [newPosts, setNewPosts] = useState([]);//To render spinner

  const { ref, inView } = useInView();
  const profilePostsFun = async () => {
    const nextPage = profilePagesLoaded + 1;
    const newFetchedPosts =
      (await GetProfilePosts(nextPage, props.userId, props.token, false)) ?? [];
    setProfilePosts((posts) => {
      return [...posts, ...newFetchedPosts];
    });
    setProfilePagesLoaded((pagesLoad) => pagesLoad + 1);
    setNewPosts(newFetchedPosts)
  };

  const homePostsFun = async () => {
    const nextPage = homePagesLoaded + 1;
    const newFetchedPosts = await GetHomePosts(props.userId, nextPage, props.token, false);
    setNewPosts(newFetchedPosts)
    setHomePosts((posts) => [...posts, ...newFetchedPosts]);
    setHomePagesLoaded((page) => page + 1);
  };

  useEffect(() => {
    
    if (inView) {
      if (props.location === "profile") {
        profilePostsFun();
      } else {
        homePostsFun();
      }
    }
  }, [inView]);
  return (
    <>
      {props.location === "profile"
        ? profilePosts.map((post) => (
            <Post
              server={true}
              userData={post.user}
              postId={post._id}
              title={post.title}
              description={post.description}
              likesCount={post.likesCount}
              creationDate={post.creationDate}
              commentsCount={post.commentsCount}
              urls={post.urls}
              key={post._id}
              token={props.token}
              liked = {post.liked}
              userId = {props.userId}
            />
          ))
        : null}
      {props.location === "home"
        ? homePosts.map((post) => (
            <Post
              server={true}
              userData={post.user}
              postId={post._id}
              title={post.title}
              description={post.description}
              likesCount={post.likesCount}
              creationDate={post.creationDate}
              commentsCount={post.commentsCount}
              urls={post.urls}
              key={post._id}
              token={props.token}
              liked = {post.liked}
              userId = {props.userId}
            />
          ))
        : null}
        {New}
      <div ref={ref}>
        <Spinner />
      </div>
    </>
  );
}

export default LoadMorePosts;
