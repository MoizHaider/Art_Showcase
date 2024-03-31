"use client";
import React from "react";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import { useInView } from "react-intersection-observer";
import GetProfilePosts from "@/ServerActions/GetProfilePosts";
import Post from "./Post/Post";
import GetHomePosts from "@/ServerActions/GetHomePosts";

function LoadMorePosts(props) {
  const [profilePagesLoaded, setProfilePagesLoaded] = useState(1);
  const [homePagesLoaded, setHomePagesLoaded] = useState(1);
  const [profilePosts, setProfilePosts] = useState([]);
  const [homePosts, setHomePosts] = useState([]);
  const [show, setShow] = useState(true);

  const { ref, inView } = useInView();

  const profilePostsFun = async () => {
    const nextPage = profilePagesLoaded + 1;
    const newFetchedPosts =
      (await GetProfilePosts(nextPage, props.userId, props.token, false)) ?? [];
    setProfilePosts((posts) => {
      return [...posts, ...newFetchedPosts];
    });
    setProfilePagesLoaded((pagesLoad) => pagesLoad + 1);

    !(newFetchedPosts.length > 0) ? setShow(false) : null;
  };

  const homePostsFun = async () => {
    const nextPage = homePagesLoaded + 1;
    const newFetchedPosts = await GetHomePosts(
      props.userId,
      nextPage,
      props.token,
      false
    );

    !(newFetchedPosts.length > 0) ? setShow(false) : null;
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
  }, [inView, props.location]);
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
              liked={post.liked}
              userId={props.userId}
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
              liked={post.liked}
              userId={props.userId}
            />
          ))
        : null}
      {show ? (
        <div ref={ref}>
          <Spinner />
        </div>
      ) : null}
    </>
  );
}

export default LoadMorePosts;
