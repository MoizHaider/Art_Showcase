"use server"
import React from 'react'
import AddPostBtn from './AddPostBtn'

function ProfilePostBtns() {
  const onClickBtn = ()=>{
    console.log("running")
  }
  return (
    <div>
        <button type='button'>Posts</button>
        <button type = "button">Saved</button>
        <button type = "button">Create Post</button>
        <AddPostBtn btnHandler = {onClickBtn}/>
    </div>
  )
}

export default ProfilePostBtns