"use client"
import React from 'react'
import {useState, useEffect} from "react"

function LoadMorePosts() {
    const [btnPressed, setBtnPressed] = useState(0);
    const [loadedPosts, setLoadedPosts] = useState(null);
    const loadPosts = 1;
    useEffect(()=>{
      console.log("Btn pressed")
    }, [btnPressed])
  return (
    <>
      <Spinner/>
    </>
  )
}

export default LoadBtn