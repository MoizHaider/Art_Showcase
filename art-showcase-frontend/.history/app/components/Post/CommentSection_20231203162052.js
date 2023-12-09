"use client";
import React from "react";
import Comments from "./Comments";
import { useState } from "react";

function CommentSection(props) {
  const [newComments, setNewComments] = useState([])
  console.log(props.renderCommentSec)

  const addClickHandler = ()=>{

  }

  return (
    <>

      <form>
        
      </form>
        <input type="text" placeholder="Add a Comment" />
        <button type="button" onClick = {addClickHandler}>
          Add
        </button>
      
      {props.renderCommentSec ? 
        <div>
          <Comments />
        </div>
      : null}
    </>
  );
}

export default CommentSection;
