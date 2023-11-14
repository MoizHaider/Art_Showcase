"use client"
import React from "react";
import Post from "../components/Post/Post";
import LoadMorePosts from "../components/Post/LoadMorePosts";
import EditProfileBtn from "../components/profile/EditProfileBtn";
import ProfilePostBtns from "../components/profile/ProfilePostBtns";
import {useState, useEffect} from "react"
import CreatePostSection from "../components/profile/CreatePostSection";


function page() {
  const [data, setData] = useState(null);
  const [renderAddPostSec, setRenderAddPostSec] = useState(false);

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  console.log(userId)
  const graphqlQuery = {
    query:`
    query getProfileLoadData($userId: ID!){
      profileLoadQuery(userId: $userId){
        profileData{
          _id
          name
          title
          email
          posts{
            _id
            creationDate
            likesCount
            commentsCount
            saveCount
            title
            description
          }
          profilePicUrl
          backgroundImgUrl
          about
          badges
          events
          followers{
            _id
            name
            profilePicUrl
            backgroundImgUrl
            badges
          }
          following{
            _id
            name
            profilePicUrl
            backgroundImgUrl
            badges
          }
          followersCount
          followingCount
        }
      }
    }`,
    variables: {
      userId: userId
    }
  }
  useEffect(()=>{
    const response = fetch("http://localhost:8080/graphql", {
      method: "post",
      headers: {
        Authorization: "Bearer "+ token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(graphqlQuery),
    }).then(res=>res.json()).then(data=>{
      console.log(data)
    }).catch(err=>{console.log("Error ", err)})
  },[])

  const addPostClickHandler = (event)=>{
    const _id = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try{
      const response = await fetch("http://localhost:8080/addPost",{
      method: "post",
      headers: {
        Authorization: "Bearer "+ token,
      },
      body: {formData, _id}
    })
      if(!response.ok){
        throw new Error("Http error! status: ${response.status}");
      }
      const result = await response.json();
      console.log(result)
    }
    catch(err){

    }
    
  }

  return (
    <>
      {renderAddPostSec?<CreatePostSection setRenderAddPostSec = {setRenderAddPostSec} addPostHandler = {addPostClickHandler}/>:null}
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
        <ProfilePostBtns setRenderAddPostSec = {setRenderAddPostSec}/>
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
