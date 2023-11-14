"use client";
import { Ultra } from "next/font/google";
import React, { useEffect } from "react";
import { useState } from "react";

function ProfileDataInputSection({ type }) {
  const [profileImgUrl, setProfileImg] = useState()
  const [backgroundImgUrl, setBackgroundImg] = useState()
  let profileImgUrl = null, backgroundImgUrl = null
  const onSubmitHandler = () => {};
  const onProfileImgChangeHandler = (event)=>{
    let img = event.target.files[0]
    URL.createObjectURL(img);
    setProfileImg(img)
  }
  const onBackgroundImgChangeHandler = (event)=>{
    let img = event.target.files[0]
    URL.createObjectURL(img);
    setBackgroundImg(img)
  }
  console.log(backgroundImgUrl)
  useEffect(()=>{

  })
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label for="name">Name</label>
          <input type="text" name="name"/>
        </div>
        <div>
          <label for="title">Title</label>
          <input type="text" name="title" />
        </div>
        <div>
          <label>Profile Image</label>
          <input type="file" name="profileImg" onChange = {onProfileImgChangeHandler}/>
          <img src={profileImgUrl}/>
          <label>Background Image</label>
          <input type="file" name="backgroundImg" onChange={onBackgroundImgChangeHandler}/>
          <img src={backgroundImgUrl} />
        </div>
        <label for="about"></label>
        <input type="text" name="about"/>
        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default ProfileDataInputSection;
