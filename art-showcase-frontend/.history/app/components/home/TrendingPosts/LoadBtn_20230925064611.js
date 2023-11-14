"use client"
import React from 'react'


function LoadBtn() {
    const [btnPressed, setBtnPressed] = useState(0);
    const [loadedPosts, setLoadedPosts] = useState(null);
    const onBtnClickHandler = ()=>{
        setBtnPressed(val=>{
          val+1;
        })
    }
  return (
    <button type="button" onClick={onBtnClickHandler}>More</button>
  )
}

export default LoadBtn