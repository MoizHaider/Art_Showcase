"use client"
import React from 'react'
import AddPostBtn from './AddPostBtn'

function ProfilePostBtns() {
  return (
    <div>
        <button type='button'>Posts</button>
        <button type = "button">Saved</button>
        <button type = "button">Create Post</button>
        <AddPostBtn/>
    </div>
  )
}

export default ProfilePostBtns