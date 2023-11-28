"use server"

export default function GetHomePosts(page, token, initialLoad) {
    let graphqlQuery;
    if(initialLoad){
       graphqlQuery = {
            query: `
              query getHomeData($page: Int, $limit: Int){
                homeLoadQuery(page: $page, limit: $limit){
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
                limit: 
              }
          };
    }
    else{
        graphqlQuery = {
            query: `
              {
                homeLoadQuery{
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
              }
            `,
          };
    }
    
      const response = await fetch("http://localhost:8080/graphql", {
        method: "post",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
          noOfPosts
        },
        body: JSON.stringify(graphqlQuery),
      });
      homeLoadData = await response.json();
  return (
    <div>GetHomePosts</div>
  )
}
