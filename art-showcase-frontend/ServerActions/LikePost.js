import React from "react";

export default async function LikePost(token, postId, userId, liked) {
  const likeQuery = {
    query: `
      mutation likePost($liked: Boolean, $postId: ID!, $userId: ID){
        likePost(liked: $liked, postId: $postId, userId: $userId)
      }
    `,
    variables: {
      postId,
      userId,
      liked,
    },
  };

    const response = await fetch(`${process.env.BACKEND_URL}/graphql`, {
      method: "post",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
        "Cache-Control": "no-cache"
      },
      body: JSON.stringify(likeQuery),
    })
    const result = await response.json()
    return result;
      
}
