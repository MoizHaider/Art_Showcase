import React from "react";
import Image from "next/image";

function Comment(props) {
  console.log("url ", props.profilePicUrl);
  const imgUrl = "http://localhost:8080/" + props.profilePicUrl;

  return (
    <>
    <div>
      
    </div>
     
        <button>Delete</button>
      </div>
      
    </>
  );
}

export default Comment;
