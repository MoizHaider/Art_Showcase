"use client";
import React, { useState } from "react";
import Post from "../Post/Post";
import { addPost } from "../../GlobalRedux/Features/PostsSlice";
import { useDispatch } from "react-redux";
import CreatePost from "@/ServerActions/CreatePost";
import Modal from "../Modal";
import { useRef } from "react";
import { storage } from "@/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function CreatePostSection(props) {
  // const inputRef = useRef(null);
  const [renderAddPostSec, setRenderAddPostSec] = useState(false);
  const dispatch = useDispatch();

  const addPostHandler = async (event) => {
    event.preventDefault();
    // const files = inputRef.current.files;

    const formData = new FormData(event.currentTarget);
    const filesArray = Array.from(event.currentTarget.postImages.files);

    const imgNames = filesArray.map((file) => file.name);

    const title = event.currentTarget.title.value;
    const description = event.currentTarget.description.value;

    const imgUrls = filesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    const currentTime = Math.floor(Date.now() / 1000).toString(); // Convert milliseconds to seconds
    const urls = await Promise.all(filesArray.map(async (file) => {
      const fileRef = ref(storage, `${file.name}-${currentTime}`);
      await uploadBytes(fileRef, file);
      const downloadURL = await getDownloadURL(fileRef);
      return downloadURL;
    }));
    

    const userData = {
      userId: props.userId,
      email: props.email,
      name: props.name,
      profilePicUrl: props.profilePicUrl,
    };
    const postInfo = {
      title,
      description,
      imgUrls,
    };
    const postData = await CreatePost(
      formData,
      props.token,
      userData,
      postInfo,
      urls
    );
    console.log("post Data ", postData)

    dispatch(addPost(postData));
    setRenderAddPostSec(false);
  };

  const createPostHandler = () => {
    setRenderAddPostSec(true);
  };

  return (
    <>
      {renderAddPostSec ? (
        <Modal isOpen={true}>
          <div
            className={`z-20 absolute top-0 left-0 h-full flex items-center  bg-black bg-opacity-40 justify-center  w-[100vw] ${
              renderAddPostSec ? "block" : "hidden"
            }`}
          >
            <div className="bg-primary p-8 rounded-lg z-50 h-[100vh] sm:w-[50%]">
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-accent text-primary"
                  onClick={() => setRenderAddPostSec(false)}
                >
                  Close
                </button>
              </div>

              <form onSubmit={addPostHandler} className="space-y-4 text-text">
                <div className="flex flex-col">
                  <label>Upload Photo</label>
                  <input
                    type="file"
                    name="postImages"
                    // ref={inputRef}
                    multiple
                  />
                </div>

                <div>
                  <label for="title">Title</label>
                  <input
                    type="text"
                    name="title"
                    className="rounded-full focus:outline-none focus:border-accent p-2 w-full"
                  />
                </div>
                <div>
                  <label>Description</label>
                  <textarea
                    name="description"
                    className="rounded-lg border-[1px] border-gray-500 focus:outline-none focus:border-accent p-2 w-full h-32 resize-none"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-primary hover:bg-accent text-text hover:text-white rounded-full p-2 transition-all focus:outline-none"
                  >
                    Upload
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Modal>
      ) : null}

      <button
        type="button"
        className="border-secondary border-2 text-secondary hover:text-white hover:bg-red-400 hover:border-none  lg:border-primary lg:bg-red-400 lg:text-white lg:border-none  hover:bg-primary hover:text-text transition-all"
        onClick={createPostHandler}
      >
        Create Post
      </button>
    </>
  );
}
export default CreatePostSection;
