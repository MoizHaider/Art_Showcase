import React from "react";
import Post from "../components/Post/Post";
import LoadMorePosts from "../components/Post/LoadMorePosts";
import EditProfileBtn from "../components/profile/EditProfileBtn";
import ProfilePostBtns from "../components/profile/ProfilePostBtns";
import EditProfileSection from "../components/profile/EditProfileSection";

function page() {
  return (
    <>
      <header>
        Pic area
        <span>User Name</span>
      </header>
      <main>
        <div>
          <h2>about</h2> 
          <div>
            <EditProfileBtn/>
          </div>
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
