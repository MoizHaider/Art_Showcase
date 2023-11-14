"use client"
import React from 'react'

function CreatePostSection() {
  return (
    <>
      <form>
        <label>Upload Photo</label>
        <input type = "file" name = "postImg"/>
        <label></label>
      </form>
    </>
  )
}

export default CreatePostSection