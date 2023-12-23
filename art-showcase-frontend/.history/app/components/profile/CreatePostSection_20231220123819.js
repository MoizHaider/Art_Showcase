"use client";
import React, { useState } from "react";
import Post from "../Post/Post";
import { addPost } from "../../GlobalRedux/Features/PostsSlice";
import { useDispatch } from "react-redux";
import CreatePost from "@/ServerActions/CreatePost";
function CreatePostSection(props) {
  const [renderAddPostSec, setRenderAddPostSec] = useState(false);
  const dispatch = useDispatch();

  const addPostHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const filesArray = Array.from(event.currentTarget.postImages.files);
    const imgNames = filesArray.map((file) => file.name);
    const title = event.currentTarget.title.value;
    const descritpion = event.currentTarget.description.value;
    const imgUrls = filesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    console.log("create props", props);
    const userData = {
      userId: props.userId,
      email: props.email,
      name: props.name,
      profilePicUrl: props.profilePicUrl,
    };
    const postInfo = {
      title: event.currentTarget.title.value,
      description: event.currentTarget.description.value,
      imgUrls,
    };
    const postData = await CreatePost(
      formData,
      props.token,
      userData,
      postInfo,
      imgNames
    );
    console.log("post Data", postData);
    dispatch(addPost(postData));
  };

  const createPostHandler = () => {
    setRenderAddPostSec(true);
  };

  return (
    <>
      {renderAddPostSec ? (
        <div
          className={` fixed top-0 left-0 w-full h-full flex items-center backdrop-blur backdrop-filter bg-black bg-opacity-30 justify-center ${
            renderAddPostSec ? "block" : "hidden"
          }`}
        >
          <div className="bg-formBg p-8 rounded-lg w-[50%]">
            <div className = "flex justify-end">
            <button
              type="button"
              className="bg-accent text-primary"
              onClick={() => setRenderAddPostSec(false)}
            >
              Close
            </button>
            </div>
            
            <form onSubmit={addPostHandler} className="space-y-4 ">
              <label>Upload Photo</label>
              <input type="file" name="postImages" multiple />
              <label for="title">Title</label>
              <input
                type="text"
                name="title"
                className="rounded-full border border-gray-300 focus:outline-none focus:border-accent p-2 w-full"
              />
              <label>Description</label>
              <textarea
                name="description"
                className="rounded-lg border border-gray-300 focus:outline-none focus:border-accent p-2 w-full h-32 resize-none"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-accent text-text hover:text-white rounded-full p-2 transition-all focus:outline-none"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      ) : null}

      <button type="button" onClick={createPostHandler}>
        Create Post
      </button>
    </>
  );
}
export default CreatePostSection;
