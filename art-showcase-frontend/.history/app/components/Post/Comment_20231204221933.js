import React from "react";
import Image from "next/image";

function Comment(props) {
  console.log("url ", props.profilePicUrl);
  const imgUrl = "http://localhost:8080/" + props.profilePicUrl;

  return (
    <>
    <div>
      
    </div>
      <div className="flex items-center">
        <Image src={imgUrl} width={50} height={50} />
        <div>
          {props.name}
          <div>{props.text}</div>
        </div>
        <button>Delete</button>
      </div>
      
    </>
  );
}

export default Comment;
