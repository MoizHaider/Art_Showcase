import React from 'react'

function ProfilePostBtns() {
  const onClickBtn = ()=>{
    console.log("running")
  }
  return (
    <div>
        <button type='button'>Posts</button>
        <button type = "button">Saved</button>
        <button type = "button">Create Post</button>
    </div>
  )
}

export default ProfilePostBtns