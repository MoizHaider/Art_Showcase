import React from 'react'

function CreatePostSection(props) {
  return (
    <>
      <form>
        <button type="button" onClick = {()=>props.setRenderAddPostSection(false)}>Close</button>
        <label>Upload Photo</label>
        <input type = "file" name = "image"/>
        <label>Title</label>
        <input type="text" name="title"/>
        <label>Description</label>
        <input type="text" name="description"/>
        <button type="button" onClick={props.addPostHandler}>Add</button>
      </form>
    </>
  )
  }

export default CreatePostSection