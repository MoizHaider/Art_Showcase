"use client"
import React from 'react'
import {useState, useEffect} from "react"

function LoadBtn() {
    const [btnPressed, setBtnPressed] = useState(0);
    const [loadedPosts, setLoadedPosts] = useState(null);
    const loadPosts = 1;
    const onBtnClickHandler = ()=>{
        setBtnPressed(val=>{
          val+1;
        })
        useEffect(()=>{
          console.log("")
        }, [btnPressed])
    }
  return (
    <button type="button" onClick={onBtnClickHandler}>More</button>
  )
}

export default LoadBtn