"use server"

export default function getComments(token, postId, userId) {
    const graphqlQuery = {
        query: `query getCommentsQuery($postId: ID, $userId: ID){
            getComments(postId: $postId, userId: $userId){
                text
                user{
                    _id
                    email
                    name
                    profilePicUrl
                }
            }
        }`,
        variables: {
            postId,
            userId
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
  
    return ""
}
