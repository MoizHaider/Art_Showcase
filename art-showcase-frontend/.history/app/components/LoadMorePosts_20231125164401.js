"use client";
import React from "react";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import { useInView } from "react-intersection-observer";
import GetProfilePosts from "@/ServerActions/GetProfilePosts";
import Post from "./Post/Post";

function LoadMorePosts(token, userId, location) {
  const [profilePagesLoaded, setProfilePagesLoaded] = useState(1);
  const [homePagesLoaded, setHomePagesLoaded] = useState(1);
  const [profilePosts, setProfilePosts] = useState();
  const [homePosts, setHomePosts] = useState();

  const { ref, inView } = useInView();

  const profilePostsFun = async () => {
    const nextPage = pagesLoaded + 1;
    const newPosts = (await GetProfilePosts(nextPage, token, userId)) ?? [];
    setProfilePosts((posts) => {
      return [...posts, ...newPosts];
    });
    setProfilePagesLoaded((pagesLoad) => pagesLoad + 1);
  };
  const homePostsFun = async () => {};

  useEffect(() => {
    console.log("Load More");
    if (inView) {
      if ((location = "profile")) {
        profilePagesLoaded();
      } else {
        homePostsFun();
      }
    }
  }, [inView]);

  return (
    <>
      {location == "profile"
        ? profilePosts.map((post) => (
            <Post
              server={true}
              userData={data.userData}
              postId={post._id}
              title={post.title}
              description={post.description}
              likesCount={post.likesCount}
              creationDate={post.creationDate}
              commentsCount={post.commentsCount}
              urls={post.urls}
              key={post._id}
              token={token}
            />
          ))
        : null}
      <div ref={ref}>
        <Spinner />
      </div>
    </>
  );
}

export default LoadMorePosts;
