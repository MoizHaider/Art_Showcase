'use client'
import React from 'react'

function EventBackBtn() {
    const btnClickHandler = (props)=>{
        
        console.log("Hello world")
    }
  return (
        <button type='button' onClick={btnClickHandler}>Back</button>
        
    )
}

export default EventBackBtn