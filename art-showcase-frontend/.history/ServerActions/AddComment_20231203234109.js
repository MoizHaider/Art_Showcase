"use server"

export default async function AddComment() {
    const graphqlQuery = {
        query: `mutation addCommnentQuery( $postId: ID, $userID: ID, $text: String){
                addComment(postId: $postId, userId: $userId,  )
        
        
        }`
    }
  
  
    return ''
}
