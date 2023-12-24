"use client"
import React from "react";
import Image from "next/image";

function Comment({commentData}) {
  const [del, setDel] = useState(false);
  const imgUrl = "http://localhost:8080/" + commentData.userData.profilePicUrl;
  del
  return (
<div className="sm:flex justify-between p-4 border-b border-gray-300">
  <div className="sm:flex items-center space-x-4">
    <Image src={imgUrl} width={50} height={50} className="rounded-full" />
    <div>
      <p className="font-bold">{commentData.userData.name}</p>
      <p className="text-gray-600">{commentData.text}</p>
    </div>
  </div>

  <button className="text-red-500">Delete</button>
</div>

  );
}

export default Comment;
