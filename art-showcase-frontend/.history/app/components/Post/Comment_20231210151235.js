import React from "react";
import Image from "next/image";

function Comment({commentData}) {
  console.log("url ", props.profilePicUrl);
  const imgUrl = "http://localhost:8080/" + props.profilePicUrl;
  console.log("cmnt ",)
  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center">
          <Image src={imgUrl} width={50} height={50} />
          <div>
            {/* {commentData.userData.name}
            <div>{commentData.text}</div> */}
          </div>
        </div>

        <button>Delete</button>
      </div>
    </>
  );
}

export default Comment;
