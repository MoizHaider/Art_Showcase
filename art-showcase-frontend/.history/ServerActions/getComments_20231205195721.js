"use server";

export default async function getComments(token, postId, userId, page) {
  const graphqlQuery = {
    query: `query getCommentsQuery($postId: ID, $userId: ID, $page: Int){
            getComments(postId: $postId, userId: $userId, page: $page){
                text
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
      page: page
    },
  };
  const response = await fetch("http://localhost:8080/graphql", {
    method: "post",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(graphqlQuery),
  })
  const result = await response.json()
  return result;
}
