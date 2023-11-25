"use client"
import React from 'react'
import { useSelector, UseSelector } from 'react-redux'

export default function NewPost() {
  const postsData = useSelector(state=>state.authReducer.posts)
  console.log(postData)
  return (
    <div>NewPost</div>
  )
}
