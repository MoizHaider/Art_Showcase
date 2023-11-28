"use client";
import React, { useState } from "react";
import Post from "../Post/Post";
import { addPost } from "../../GlobalRedux/Features/PostsSlice"
import { useDispatch } from "react-redux";
import CreatePost from "@/ServerActions/CreatePost";
function CreatePostSection(props) {
  const [renderAddPostSec, setRenderAddPostSec] = useState(false);
  //const [postsData, setPostsData] = useState([]);
  const dispatch = useDispatch();
  

  const addPostHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const filesArray = Array.from(event.currentTarget.postImages.files)
    const imgUrls = filesArray.map(file=>{
      return URL.createObjectURL(file)
    });
    const userData = {
      userId: props.userId,
      
    }
    const title = event.currentTarget.title.value
    const description = event.currentTarget.description.value
    const postData = await CreatePost(props.token, )
      dispatch(addPost(postData))
      
      // console.log("This is result",result);
    
  };

  const createPostHandler = () => {
    setRenderAddPostSec(true);
  };

  return (
    <>
      {renderAddPostSec ? (
        <form onSubmit={addPostHandler}>
          <button type="button" onClick={() => setRenderAddPostSec(false)}>
            Close
          </button>
          <label>Upload Photo</label>
          <input type="file" name="postImages" multiple />
          <label>Title</label>
          <input type="text" name="title" />
          <label>Description</label>
          <input type="text" name="description" />
          <button type="submit">Add</button>
        </form>
      ) : null}

      <button type="button" onClick={createPostHandler}>
        Create Post
      </button>
    </>
  );
}
export default CreatePostSection;
