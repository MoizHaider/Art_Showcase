"use server"

export default async function AddComment(token, postId, userId, text, newComments) {
    const newCommentsIds = newComments.map(comment=>comment._id)
    const graphqlQuery = {
        query: `mutation addCommnentQuery( $postId: ID, $userId: ID, $text: String, $newComments: [ID]){
                addComment(postId: $postId, userId: $userId, text: $text, newComments: $ )
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
      body: JSON.stringify(graphqlQuery),
    })
    const result = await response.json()
    return result;
}
