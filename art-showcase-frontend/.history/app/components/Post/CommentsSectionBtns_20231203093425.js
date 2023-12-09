import React from 'react'
import { useSelector } from "react-redux";
function CommentsSectionBtns() {
    const onAddHandler = ()=>{
      
    }
    return (
    <div>
          <input type="text" placeholder='Add a Comment'/>
          <button type="button" onClick = {onAddHandler}>Add</button>
    </div>
  )
}

export default CommentsSectionBtns