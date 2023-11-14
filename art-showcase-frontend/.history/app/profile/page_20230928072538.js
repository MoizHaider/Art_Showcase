import React from "react";
import Post from "../components/Post/Post";
import LoadMorePosts from "../components/Post/LoadMorePosts";
import EditProfileBtn from "../components/profile/EditProfileBtn";
import ProfilePostBtns from "../components/profile/ProfilePostBtns";


async function page() {
  const graphqlQuery = {
    query:`
    query getProfileLoadData($userId: ID!){
      profileLoadQuery(userId: $userId){
        UserProfile{
          name
          title
        }
      }
    }
    `
  }
  const response = await fetch("http://localhost:8080/graphql", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(graphqlQuery),
  })
  const data = await response.json();
  console.log(data)
 
  return (
    <>
      <header>
        Pic area
        <span>User Name</span>
      </header>
      <main>
        <div>
            <h2>about</h2>
            <EditProfileBtn/>
          <div>About Des</div>
          <div>Badges</div>
          <div>Events Won</div>
        </div>
      </main>
      <main>
        <ProfilePostBtns />
        <div>
          <Post type="userPosts" />
        </div>
        <div>
          <LoadMorePosts type="userPosts" />
        </div>
      </main>
    </>
  );
}
export default page;
