"use server";

export default async function getComments(token, postId, userId, page) {
  console.log("sup yo")
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
      "Cache-Control": "no-store"
    },
    body: JSON.stringify(graphqlQuery),
  })
  const result = await response.json()
  console.log("result ", result)
  return result.data.getComments;
}
