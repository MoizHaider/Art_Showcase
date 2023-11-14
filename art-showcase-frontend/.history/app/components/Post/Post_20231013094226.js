"use client"
import { useState } from 'react'
import React from 'react'
import PostBtns from './PostBtns'
import CommentSection from "./CommentSection"

function TrendingPosts(props) {
  //render list of data revieved from page.js
  return (
    <div className = "border-[2px] border-solid border-white p-7 border-radi">
      <main>
        {props.title}
        <div>
          {props.description}
        </div>
      </main>
      <PostBtns/>
    </div>
  )
}

export default TrendingPosts