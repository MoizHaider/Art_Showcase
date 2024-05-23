"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import delComment from "@/ServerActions/delComment";

function Comment({ commentData, token, postId,  newComments, setNewComments, commentsData, setCommentsData}) {
  // const [del, setDel] = useState(false);
  const imgUrl = commentData.userData.profilePicUrl;
  const delHandler = async () => {
    const updatedNewComments = newComments.length !=0 && newComments.filter(comment => comment.commentId !== commentData.commentId);
      const updatedCommentsData = commentData.length !=0 && commentsData.filter(comment => comment.commentId !== commentData.commentId);

      // Update the state
      setNewComments(updatedNewComments);
      setCommentsData(updatedCommentsData);
    
    await delComment(token, postId, commentData.commentId);
  };
  return (
    <>
   
        <div className="flex justify-between p-4 border-b border-gray-300">
          <div className="flex items-center space-x-4">
            <Image
              src={imgUrl}
              width={50}
              height={50}
              className="rounded-full w-[50px] h-[50px]"
              alt="Image"
            />
            <div>
              <p className="font-bold">{commentData.userData.name}</p>
              <p className="text-gray-600">{commentData.text}</p>
            </div>
          </div>

          <button className="text-red-500" onClick={delHandler}>
            Delete
          </button>
        </div>
 
    </>
  );
}

export default Comment;
