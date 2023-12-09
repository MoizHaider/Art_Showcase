"use server"

export default function getComments(token, postId, userId) {
    const graphqlQuery = {
        query: `query getCommentsQuery($postId: ID, $userId: ID){
            getComments(postId: $postId, userId: $userId){
                text
                user{
                    _
                }
            }
        }`
    }
  
    return ""
}
