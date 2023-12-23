"use server";

export default async function getComments(token, postId, userId, page, newComments) {
  console.log("newComments", newComments)
  const newCommentsIds = newComments.map(comment=> comment.commentId)
  const graphqlQuery = {
    query: `query getCommentsQuery($postId: ID, $userId: ID, $page: Int, $newComments: [ID]){
              getComments(postId: $postId, userId: $userId, page: $page, newComments: $newComments){
                commentId
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
      newComments: newCommentsIds
    },
  };
  const response = await fetch("http://localhost:8080/graphql", {
    method: "post",
    cache: "no-store",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(graphqlQuery),
  })
  const result = await response.json()
  console.log("result ", result.data.getComments)
  return result.data.getComments;
}
