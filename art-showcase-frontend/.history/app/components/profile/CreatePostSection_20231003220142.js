"use client"
import React from 'react'

function CreatePostSection() {
  return (
    <>
      <form>
        <label>Upload Photo</label>
        <input type = "file" name = "postImg"/>
      </form>
    </>
  )
}

export default CreatePostSection