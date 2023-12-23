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
      <div className = "bg-formBg h-[100vh] flex items-center">
        <form
          onSubmit={onSubmitHandler}
          className="max-w-screen-md mx-auto p-10 bg-white shadow-md rounded-lg mt-8"
        >
          <div className="mb-4 flex items-center">
            <div className="w-1/2 pr-4">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-accent"
              />
            </div>
            <div className="w-1/2 pl-4">
              <label
                htmlFor="title"
                className="block text-sm font-semibold text-gray-600"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-accent"
              />
            </div>
          </div>

          <div className="mb-4 flex items-center">
            <div className="w-1/2 pr-4">
              <label
                htmlFor="profileImg"
                className="block text-sm font-semibold text-gray-600"
              >
                Profile Image
              </label>
              <input
                type="file"
                name="profileImg"
                onChange={onProfileImgChangeHandler}
                className="mt-1 mb-2 w-full focus:outline-none"
              />
              {profileImgUrl && (
                <img
                  src={profileImgUrl}
                  alt="Profile Preview"
                  className="w-20 h-20 object-cover mb-2"
                />
              )}
            </div>

            <div className="w-1/2 pl-4">
              <label
                htmlFor="backgroundImg"
                className="block text-sm font-semibold text-gray-600"
              >
                Background Image
              </label>
              <input
                type="file"
                name="backgroundImg"
                onChange={onBackgroundImgChangeHandler}
                className="mt-1 mb-2 w-full focus:outline-none"
              />
              {backgroundImgUrl && (
                <img
                  src={backgroundImgUrl}
                  alt="Background Preview"
                  className="w-20 h-20 object-cover mb-2"
                />
              )}
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="about"
              className="block text-sm font-semibold text-gray-600"
            >
              About
            </label>
            <textarea
              name="about"
              placeholder="Write a brief description (max 150 characters)"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-accent"
            ></textarea>
          </div>

          <input type="hidden" name="_id" value={_id} />

          <button
            type="submit"
            className="bg-accent text-white py-2 px-4 rounded-md hover:bg-opacity-80 focus:outline-none"
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
}

export default ProfileDataInputSection;
