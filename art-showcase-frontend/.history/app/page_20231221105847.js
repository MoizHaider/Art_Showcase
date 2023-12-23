import Image from "next/image";
import styles from "./page.module.css";
import Events from "./components/home/Events";

import LoadMorePosts from "./components/LoadMorePosts";
import SearchSection from "./components/SearchSection";
import { cookies } from "next/headers";
import Post from "./components/Post/Post";
import GetHomePosts from "@/ServerActions/GetHomePosts";

export default async function Home() {
  const token = cookies().get("token").value;
  const userId = cookies().get("userId").value;
  const email = cookies().get("email").value;
  const noOfPosts = 20;
  let homeLoadData = await GetHomePosts(userId, 1, token, true);
  const homePosts = homeLoadData.posts;

  return (
  <div className="grid bg-white grid-cols-1 lg:grid-cols-3">
  {/* Search Section Sidebar */}
  <aside className="lg:col-span-1 sticky top-0  h-screen p-4 bg-{#cf4848]">
    <SearchSection />
  </aside>

  {/* Main Content */}
  <main className="p-0 grid lg:col-span-2">
    {homePosts.length > 0
      ? homePosts.map((post) => (
          <Post
            server={true}
            userData={post.user}
            postId={post._id}
            title={post.title}
            description={post.description}
            likesCount={post.likesCount}
            creationDate={post.creationDate}
            commentsCount={post.commentsCount}
            urls={post.urls}
            key={post._id}
            token={token}
            liked={post.liked}
            userId={userId}
          />
        ))
      : null}
    <LoadMorePosts token={token} userId={userId} location="home" />
  </main>

  {/* Copyright Footer */}
  <footer className="lg:col-span-3">Copyright material</footer>
  </div>
  )
}
