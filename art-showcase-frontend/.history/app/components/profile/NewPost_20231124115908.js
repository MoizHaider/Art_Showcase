"use client"
import React from 'react'
import { useSelector, UseSelector } from 'react-redux'

export default function NewPost() {
  const postData = useSelector(state=>state.authReducer.posts)
  console.log(postData)
  return (
    <div>NewPost</div>
  )
}
