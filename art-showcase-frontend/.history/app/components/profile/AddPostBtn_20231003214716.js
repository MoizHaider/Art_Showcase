import React from 'react'

function AddPostBtn({btnHandler}) {
    const onClickHandler = ()=>{
        onClickBtn();
    }
  return (
    <button type="button" onClick={onClickHandler}>click me</button>
  )
}

export default AddPostBtn