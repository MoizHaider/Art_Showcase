"use server";
//------------------------------------------------------------- Function ---------------------------------------
export default async function GetProfilePosts( page, userId, token, initialLoad) {

  let graphqlQuery;
  if (initialLoad) {
    graphqlQuery = {
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
              liked
              user{
                _id
                email
                name
                profilePicUrl
              }
            }
          }
        }`,
      variables: {
        userId: userId,
        page: page,
        limit: 5,
      },
    };
  } else {
    graphqlQuery = {
      query: `
        query getProfilePostsData($userId: ID!, $page: Int, $limit: Int){
          getProfilePosts(userId: $userId, page: $page, limit: $limit){
            posts{
              _id
              urls
              creationDate
              likesCount
              commentsCount
              saveCount
              title
              description
              user{
                _id
                email
                name
                profilePicUrl
              }
              liked
            }
    
          }
        }`,
      variables: {
        userId: userId,
        page: page,
        limit: 5,
      },
    };
  }

  const response = await fetch(`${process.env.BACKEND_URL}/graphql`, {
    method: "post",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
      "Cache-Control": "no-cache"
    },
    body: JSON.stringify(graphqlQuery),
  });

  const profileData = await response.json();
  const data = initialLoad == true ? profileData.data.profileLoadQuery: profileData.data.getProfilePosts.posts;

  return data;
}
