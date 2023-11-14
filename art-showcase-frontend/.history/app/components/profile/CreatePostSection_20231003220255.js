"use client"
import React from 'react'

function CreatePostSection() {
  return (
    <>
      <form>
        <label>Upload Photo</label>
        <input type = "file" name = "image"/>
        <label>Title</label>
        <input type="text" name="title"/>
        <label>Description</label>
        <input type="text" name="description" value="">
      </form>
    </>
  )
}

export default CreatePostSection