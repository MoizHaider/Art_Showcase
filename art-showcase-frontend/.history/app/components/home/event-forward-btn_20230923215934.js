'use client'
import React from 'react'

function EventForwardBtn() {
    const forwardBtnClickHandler = ()=>{
        console.log("hello world")
    }
  return (
    <button type="button" onClick={forwardBtnClickHandler}>Forward</button>
  )
}

export default EventForwardBtn