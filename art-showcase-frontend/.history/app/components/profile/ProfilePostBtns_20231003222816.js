import React from 'react'
import {useState} from "react"

function ProfilePostBtns(props) {
  const [renderAddPostSec, setRenderAddPostSec] = useState(false);
  const createPostHandler = ()=>{
    setRenderAddPostSec(true);
  }
  const createSectionCloseHandler = ()
  return (
    <div>
        <button type='button'>Posts</button>
        <button type = "button">Saved</button>
        <button type = "button" onClick={createPostHandler} addPostHandler = {props.addPostClickHandler}>Create Post</button>
    </div>
  )
}

export default ProfilePostBtns