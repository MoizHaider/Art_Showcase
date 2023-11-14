"use client";
import React, { useEffect } from "react";
import { useState } from "react";

function ProfileDataInputSection({ type }) {
  const [profileImgUrl, setProfileImgUrl] = useState();
  const [backgroundImgUrl, setBackgroundImgUrl] = useState();
  const [profileImg, setProfileImg] = useState();
  const [backgroundImg, setBackgroundImg] = useState();

  const email = sessionStorage.getItem("email");
  const _id = sessionStorage.getItem("_id");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    console.log("Session ",_id)
    console.log("input ",event.currentTarget._id.value)
    const formData = new FormData(event.currentTarget);
    //formData.append("_id", _id)
    try {
      await fetch("http://localhost:8080/create-user-details", {
        method: "post",
        body: formData,
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`); // throw an http error if a status code of 400 and 500 is found
      }
      sessionStorage.removeItem("email"); //In fetch req if there is an http error these lines will run,
      sessionStorage.removeItem("_id"); // but if a network error then these line will not run and catch block will execute
      
    } catch (err) {
      console.log(err);
    }
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
        <input type="hidden" name="_id" value={_id}/>
        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default ProfileDataInputSection;
