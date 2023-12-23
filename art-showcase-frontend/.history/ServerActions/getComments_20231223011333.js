"use server";

export default async function getComments(token, postId, userId, page, newComments) {
  const newCommentsIds = newComments.map(comment=>comment.commentId)
  const graphqlQuery = {
    query: `query getCommentsQuery($postId: ID, $userId: ID, $page: Int, $newComments: ID){
              getComments(postId: $postId, userId: $userId, page: $page, newComments: $newComments){
                text  # Add this line to specify the 'text' field
                userData{
                    _id
                    email
                    name
                    profilePicUrl
                }
            }
        }`,
    variables: {
      postId,
      userId,
      page: page,
      newComments: newCo
    },
  };
  const response = await fetch("http://localhost:8080/graphql", {
    method: "post",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
      
    },
    body: JSON.stringify(graphqlQuery),
  })
  const result = await response.json()
  console.log("result ", result)
  return result.data.getComments;
}
