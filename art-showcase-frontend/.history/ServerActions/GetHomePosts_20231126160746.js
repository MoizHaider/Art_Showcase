"use server"

export default function GetHomePosts(page, token, initialLoad) {
    let graphqlQuery;
    if
    
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
