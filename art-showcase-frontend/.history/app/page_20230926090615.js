import Image from "next/image";
import styles from "./page.module.css";
import Events from "./components/home/Events";
import TrendingPosts from "./components/Post/Post";
import LoadMorePosts from "./components/Post/LoadMorePosts";

export default async function Home() {
  //fetch function to load event files and paginated amount of Trending posts
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
      "Content-Type": "application/json",
    },
    body: JSON.stringify(graphqlQuery),
  })
  let data = await response.json();
  console.log(data.data.homeLoadQuery);
  return (
    <>
      <header>Welcome page</header>
      <main className="main">
        <Events />
      </main>
      <main>
        <TrendingPosts type = ""/>
      </main>
      <LoadMorePosts/>
      <footer>Copyright material</footer>
    </>
  );
}
