"use client";
import React, { useEffect } from "react";
import { useState } from "react";

function ProfileDataInputSection({ type }) {
  const [profileImgUrl, setProfileImgUrl] = useState();
  const [backgroundImgUrl, setBackgroundImgUrl] = useState();
  let profileImg, backgroundImg;
  const email = sessionStorage.getItem("email");
  const password = sessionStorage.getItem("password");
  sessionStorage.removeItem("email");
  sessionStorage.removeItem("password");


  const onSubmitHandler = () => {

  };
  const onProfileImgChangeHandler = (event) => {
    profileImg = event.target.files[0];
    setProfileImgUrl(URL.createObjectURL(profileImg));
  };
  const onBackgroundImgChangeHandler = (event) => {
    let backgroundImg = event.target.files[0];
    setBackgroundImgUrl(URL.createObjectURL(backgroundImg));
  };
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" />
        </div>
        <div>
          <label>Profile Image</label>
          <input
            type="file"
            name="profileImg"
            onChange={onProfileImgChangeHandler}
          />
          <img src={profileImgUrl} />
          <label>Background Image</label>
          <input
            type="file"
            name="backgroundImg"
            onChange={onBackgroundImgChangeHandler}
          />
          <img src={backgroundImgUrl} />
        </div>
        <label htmlFor="about"></label>
        <input type="text" name="about" />
        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default ProfileDataInputSection;
