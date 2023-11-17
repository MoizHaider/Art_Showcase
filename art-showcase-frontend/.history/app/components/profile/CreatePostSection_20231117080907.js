"use client"
import React from 'react'

function CreatePostSection(props) {
  const [renderAddPostSec, setRenderAddPostSec] = useState(false);

  const createPostHandler = () => {
    setRenderAddPostSec(true);
  };
  
  return (
    <>
      <form onSubmit={props.addPostHandler}>
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