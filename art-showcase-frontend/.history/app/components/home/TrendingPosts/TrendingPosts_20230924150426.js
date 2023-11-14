import React from 'react'
import PostBtns from './PostBtns'
import CommentSection from "./CommentSection"

function TrendingPosts() {
  //render list of data revieved from page.js
  return (
    <div>
      <main>
        Post images and data
        <PostBtns>
          <CommentSection/>
        </PostBtns>
      </main>
      <main>
        
      </main>
    </div>
  )
}

export default TrendingPosts