"use server"

export default async function AddComment(postId, userId, text) {
    const graphqlQuery = {
        query: `mutation addCommnentQuery( $postId: ID, $userID: ID, $text: String){
                addComment(postId: $postId, userId: $userId, text: $text )
        }`,
        variables: {
            postId,
            userId,
            text
        }
    }
    const response = await fetch("http://localhost:8080/graphql", {
      method: "post",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(likeQuery),
    })
    const result = await response.json()
    return result.data.;
}
