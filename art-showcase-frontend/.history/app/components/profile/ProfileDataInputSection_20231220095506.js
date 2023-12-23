"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

function ProfileDataInputSection({ type }) {
  const [profileImgUrl, setProfileImgUrl] = useState();
  const [backgroundImgUrl, setBackgroundImgUrl] = useState();
  const [profileImg, setProfileImg] = useState();
  const [backgroundImg, setBackgroundImg] = useState();
  const router = useRouter();

  const email = localStorage.getItem("email");
  const _id = localStorage.getItem("_id");

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch(
        "http://localhost:8080/create-user-details",
        {
          method: "post",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`); // throw an http error if a status code of 400 and 500 is found
      }
      localStorage.removeItem("email"); //In fetch req if there is an http error these lines will run,
      localStorage.removeItem("_id"); // but if a network error then these line will not run and catch block will execute
      router.replace("/login");
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
    <div>
      
    </div>
    
    </>
  );
}

export default ProfileDataInputSection;
