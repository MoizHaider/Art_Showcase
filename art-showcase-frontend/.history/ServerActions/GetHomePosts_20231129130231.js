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
                    liked
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
                getHomePosts(userId: $userId, page: $page, limit: $limit){
                  posts{
                    _id
                    urls
                    creationDate
                    likesCount
                    commentsCount
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
              variables:{
                page: page,
                limit: 10,
                userId
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
      console.log("home data ", data)
  return initialLoad === true?data.data.homeLoadQuery: data.data.getHomePosts.posts
}
