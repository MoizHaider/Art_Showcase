import React from "react";
import Nav from "../components/Nav";
import Post from "../components/Post/Post";
import LoadMorePosts from "../components/Post/LoadMorePosts";
import EditProfileBtn from "../components/profile/EditProfileBtn";
import ProfilePostBtns from "../components/profile/ProfilePostBtns";

function page() {
  return (
    <>
      <header>
        Pic area
        <span>User Name</span>
      </header>
      <main>
        <div>
          about
          <div>
            <EditProfileBtn>
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
