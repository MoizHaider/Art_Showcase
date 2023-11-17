"use client"
import React from 'react'


function CreatePostSection(props) {
  const [renderAddPostSec, setRenderAddPostSec] = useState(false);

  const addPostHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const imgUrl = URL.createObjectURL(event.currentTarget.postImages.files[0]);

    try {
      const response = await fetch("http://localhost:8080/add-post", {
        method: "post",
        headers: {
          Authorization: "Bearer " + token,
          userId: _id,
          email: email,
        },
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Http error! status: ${response.status}");
      }
      const result = await response.json();
      console.log(result);
      const postData = {
        _id: null,
        url: imgUrl,
        title: event.currentTarget.title.value,
        description: event.currentTarget.description.value,
        likeCount: 0,
        commentCount: 0,
        saveCount: 0,
        creationData: new Date().toLocaleDateString(),
      };
      setData((prevData) => {
        return prevData.posts.unshift(postData);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const createPostHandler = () => {
    setRenderAddPostSec(true);
  };
  
  return (
    <>
      <form onSubmit={addPostHandler}>
        <button type="button" onClick = {()=>setRenderAddPostSec(false)}>Close</button>
        <label>Upload Photo</label>
        <input type = "file" name = "postImages" multiple/>
        <label>Title</label>
        <input type="text" name="title"/>
        <label>Description</label>
        <input type="text" name="description"/>
        <button type="submit">Add</button>
      </form>
      <button type="button" onClick={createPostHandler}>
        Create Post
      </button>
    </>
  )
  }
export default CreatePostSection