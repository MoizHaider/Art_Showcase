import React from 'react'

export default async function LikePost() {
  const likeQuery = {
    query: `
      mutation likePost(liked: Boolean, $postId: ID!, $userData: userDataInput!){
        likePost(postId: $postId, userData: $userData)
      }
    `,
    variables: {
      postId: props.postId,
      userData: {
        _id: props.userData._id,
        name: props.userData.name,
        profilePicUrl: props.userData.profilePicUrl,
        backgroundImgUrl: props.userData.backgroundImgUrl,
      },
    },
  };
  const likeHandler = () => {
    fetch("http://localhost:8080/graphql", {
      method: "post",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(likeQuery),
    })
      .then((res) => res.json())
      .then((result) => {});
  };
}
