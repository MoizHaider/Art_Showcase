import React from 'react'

function EventBackBtn() {
    const btnClickHandler = ()=>{
        console.log("Hello world")
    }
  return (
        <button type='button' onClick={btnClickHandler}></button>
    )
}

export default EventBackBtn