"use server"

export default async function GetProfilePosts(page, userId, token, initialLoad) {
    let graphqlQuery;
    if(initialLoad){
      graphqlQuery = 
    }  
   
    
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
