import Image from "next/image";
import styles from "./page.module.css";
import Events from "./components/home/Events";

import LoadMorePosts from "./components/LoadMorePosts";
import Search
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
    <div className="grid bg-primaryL ">
      <main className=" p-0 grid">
        {homePosts.length > 0
          ? homePosts.map((post) => (
              <Post
                server={true}
                userData={post.user} //user who created the post
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
                userId={userId} //user using frontend
              />
            ))
          : null}
        <LoadMorePosts token={token} userId={userId} location="home" />
      </main>

      <footer>Copyright material</footer>
    </div>
  );
}
