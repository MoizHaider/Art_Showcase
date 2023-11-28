import Image from "next/image";
import styles from "./page.module.css";
import Events from "./components/home/Events";
import TrendingPosts from "./components/Post/Post";
import LoadMorePosts from "./components/Post/LoadMorePosts";
import { useRouter } from "next/navigation";
import { cookies } from "next/headers";

export default async function Home() {
  const token = cookies().get("token").value;
  const userId = cookies().get("userId").value;
  const email = cookies().get("email").value;
  let homeLoadData;

  const graphqlQuery = {
    query: `
      {
        homeLoadQuery{
          posts{
            _id
            creationDate
            likesCount
            commentsCount
            title
            description
          }
          events{
            _id
            imgUrl
          }
        }
      }
    `,
  };

  const response = await fetch("http://localhost:8080/graphql", {
    method: "post",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(graphqlQuery),
  });
  homeLoadData = await response.json();
  const homePosts = homeLoadData.data.homeLoadQuery.posts

  console.log("Home Load", homeLoadData.data.homeLoadQuery.posts);

  return (
    <>
      <header>Welcome page</header>
      <main className="main">
        <Events />
      </main>
      <main>
        {/* {homeLoadData.posts.length > 0
                ? homeLoadData.posts.map((post) => (
                    <Post
                      type="userPosts"
                      userData={homeLoadData.userData}
                      postId={post._id}
                      title={post.title}
                      description={post.description}
                      likesCount={post.likesCount}
                      creationDate={post.creationDate}
                      commentsCount={post.commentsCount}
                      urls={post.urls}
                      key={post._id}
                      token = {token}
                    />
                  ))
                : null} */}
      </main>
      <LoadMorePosts type="homePosts" />
      <footer>Copyright material</footer>
    </>
  );
}
