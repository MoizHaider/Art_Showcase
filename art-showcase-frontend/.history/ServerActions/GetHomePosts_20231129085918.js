"use server"

export default async function GetHomePosts(userId, page, token, initialLoad) {
    let graphqlQuery;
    if(initialLoad){
       graphqlQuery = {
            query: `
              query getHomeData($userId: ID, $page: Int, $limit: Int){
                homeLoadQuery(userId: $userId, page: $page, limit: $limit){
                  posts{
                    _id
                    urls
                    creationDate
                    likesCount
                    commentsCount
                    title
                    description
                    user{
                      _id
                      email
                      name
                      profilePicUrl
                    }
                  }
                  events{
                    _id
                    imgUrl
                  }
                }
              }`,
              variables:{
                page: page,
                limit: 10,
                userId
              }
          };
    }
    else{
        graphqlQuery = {
            query: `
              query getMoreHomePosts($userId: ID, $page: Int, $limit: Int){
                getHomePosts(userId: $userID, page: $page, limit: $limit){
                  posts{
                    _id
                    urls
                    creationDate
                    likesCount
                    commentsCount
                    title
                    description
                    user{
                      _id
                      email
                      name
                      profilePicUrl
                    }
                  }
                }
              }`,
              variables:{
                page: page,
                limit: 10
              }
          };
    }
    
      const response = await fetch("http://localhost:8080/graphql", {
        method: "post",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(graphqlQuery),
      });
      const data = await response.json();
  return initialLoad === true?data.data.homeLoadQuery: data.data.getHomePosts.posts
}
