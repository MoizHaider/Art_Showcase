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
    const response = await fetch()
  
  
    return ''
}
