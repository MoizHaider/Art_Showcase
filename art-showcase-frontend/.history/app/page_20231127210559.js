import Image from "next/image";
import styles from "./page.module.css";
import Events from "./components/home/Events";
import TrendingPosts from "./components/Post/Post";
import LoadMorePosts from "./components/LoadMorePosts";
import { useRouter } from "next/navigation";
import { cookies } from "next/headers";
import Post from "./components/Post/Post";
import GetHomePosts from "@/ServerActions/GetHomePosts";

export default async function Home() {
  const token = cookies().get("token").value;
  const userId = cookies().get("userId").value;
  const email = cookies().get("email").value;
  const noOfPosts = 20;
  let homeLoadData = await GetHomePosts(1, token, true);
  const homePosts = homeLoadData.posts;

  return (
    <>
      <header>Welcome page</header>
      <main className="main">
        <Events />
      </main>
      <main className="flex felx-row ">
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
              />
            ))
          : null}
        <LoadMorePosts token={token} userId={userId} location="home" />
      </main>

      <footer>Copyright material</footer>
    </>
  );
}
