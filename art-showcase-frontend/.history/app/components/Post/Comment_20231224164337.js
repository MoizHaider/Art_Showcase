"use client"
import React from "react";
import Image from "next/image";

function Comment({commentData}) {
  const [del, setDel] = useState(false);
  const imgUrl = "http://localhost:8080/" + commentData.userData.profilePicUrl;
  const delHandler = ()=>{

  }
  return (
    <>{del?}</>


  );
}

export default Comment;
