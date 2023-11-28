"use server"

export default async function GetProfilePosts(page, userId, token, initial) {
    const graphqlQuery = {
        query: `
        query getProfileLoadData($userId: ID!, $page: Int, $limit: Int){
          profileLoadQuery(userId: $userId, page: $page, limit: $limit){
            userData{
              _id
              name
              title
              email
              profilePicUrl
              backgroundImgUrl
              about
              badges
              events
              followersCount
              followingCount
            }
            posts{
              _id
              urls
              creationDate
              likesCount
              commentsCount
              saveCount
              title
              description
            }
          }
        }`,
        variables: {
          userId: userId,
          page: page,
          limit: 5
        },
      };
    
      const response = await fetch("http://localhost:8080/graphql", {
        method: "post",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(graphqlQuery),
      });
      const profileData = await response.json();
    
      const data = profileData.data.profileLoadQuery;
      return data;
}
