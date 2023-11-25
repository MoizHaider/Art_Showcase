"use client"
import React from 'react'
import { useSelector, UseSelector } from 'react-redux'

export default function NewPost() {
  const postData = useSelector(state=>state.authReducer.value)
  return (
    <div>NewPost</div>
  )
}
