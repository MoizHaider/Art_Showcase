"use client";
import React, { useEffect } from "react";
import { useState } from "react";

function ProfileDataInputSection({ type }) {
  const [profileImgUrl, setProfileImgUrl] = useState();
  const [backgroundImgUrl, setBackgroundImgUrl] = useState();
  const [profileImg, setProfileImg] = useState();
  const [backgroundImg, setBackgroundImg] = useState();

  const onSubmitHandler = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget);
    const email = sessionStorage.getItem("email");
    const password = sessionStorage.getItem("")
    fetch("http://localhost:8080/signup", {
      method: "post",
      body: formData,
    });
  };

  const onProfileImgChangeHandler = (event) => {
    const img = event.target.files[0];
    setProfileImg(img);
    setProfileImgUrl(URL.createObjectURL(img));
  };

  const onBackgroundImgChangeHandler = (event) => {
    const img = event.target.files[0];
    setBackgroundImg(img);
    setBackgroundImgUrl(URL.createObjectURL(img));
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
