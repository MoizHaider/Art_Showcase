"use client"
import React from 'react'
import { useSelector, UseSelector } from 'react-redux'

export default function NewPost() {
  const postsData = useSelector(state=>state.postReducer)
  console.log(postsData)
  return (<>
   {{postsData.length > 0
        ? postsData.map((post) => (
            <Post
              type="userPosts"
              userData={props.data.userData}
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
        : null}}
  
  </>
         
  )
}
