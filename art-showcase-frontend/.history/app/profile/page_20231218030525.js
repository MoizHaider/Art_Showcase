import React from "react";
import Post from "../components/Post/Post";
import LoadMorePosts from "../components/LoadMorePosts";
import EditProfileBtn from "../components/profile/EditProfileBtn";
import ProfilePostBtns from "../components/profile/ProfilePostBtns";
import CreatePostSection from "../components/profile/CreatePostSection";
import { cookies } from "next/headers";
import NewPost from "../components/profile/NewPost";
import GetProfilePosts from "@/ServerActions/GetProfilePosts"

async function page() {
  const token = cookies().get("token").value;
  const userId = cookies().get("userId").value;
  const email = cookies().get("email").value;
  const name = cookies().get("name").value;
  const profilePicUrl = cookies().get("profilePicUrl").value;
  const userData = {
    name,
    profilePicUrl
  }

  const sidebarStyle = {
    position: "sticky",
    top: 0,
    height: "100vh",
    backgroundColor: "#f0f0f0", // Adjust the background color as needed
    padding: "1.5em", // Add padding to the sidebar
  };

  const data = await GetProfilePosts(1, userId, token, true);
  return (
    <>
      <div className="lg:grid lg:grid-cols-profileDesktopGridCols items-start">
        {/* <header className="col-start-1 col-end-3 h-screen">
          Pic area
          <div>User Name</div>
        </header> */}
        <aside className="hidden lg:block" style={sidebarStyle}>
          <h2>about</h2>
          <EditProfileBtn />

          <CreatePostSection
            token={token}
            userId={userId}
            email={email}
            name = {name}
            profilePicUrl = {profilePicUrl}
            data={data}
          />
          <div>About</div>
          <div>
            Where does it come from? Contrary to popular belief, Lorem Ipsum is
            not simply random text. It has roots in a piece of classical Latin
            literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampden-Sydney College in Virginia,
            looked up one of the more obscure Latin words, consectetur, from a
            Lorem Ipsum passage, and going through the cites of the word in
            classical literature, discovered the undoubtable source. Lorem Ipsum
            comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
            Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
            BC. This book is a treatise on the theory of ethics, very popular
            during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum
            dolor sit amet..", comes from a line in section 1.10.32. The
            standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </div>
          <div>Badges</div>
          <div>Events Won</div>
        </aside>
        <main className="w-full h-auto p-2 flex flex-col items-center gap-y-10 ">
          <ProfilePostBtns />
          <div className="w-[90%] grid grid-cols-1 gap-y-5 justify-center auto-col-auto">
            <NewPost data={data} userData = {userData} />
            {data
              ? data.posts.length > 0
                ? data.posts.map((post) => (
                    <Post
                      server = {true}
                      userData={userData}
                      postId={post._id}
                      title={post.title}
                      description={post.description}
                      likesCount={post.likesCount}
                      creationDate={post.creationDate}
                      commentsCount={post.commentsCount}
                      urls={post.urls}
                      key={post._id}
                      token={token}
                      liked = {post.liked}
                      userId = {userId}
                    />
                  ))
                : null
              : null}
          </div>
          <div>
            <LoadMorePosts token = {token} userId = {userId} location = "profile"/>
          </div>
        </main>
      </div>
    </>
  );
}
export default page;
