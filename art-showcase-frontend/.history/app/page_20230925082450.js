import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./components/Nav";
import Events from "./components/home/Events";
import TrendingPosts from "./components/home/TrendingPosts/TrendingPosts";

export default async function Home() {
  //fetch function to load event files and paginated amount of Trending posts
  const graphqlQuery = {
    query: `
      {
        hello{
          name
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
  const data = await response.json();
  console.log(data)
  return (
    <>
      <Nav />
      <header>Welcome page</header>
      <main className="main">
        <Events />
      </main>
      <main>
        <TrendingPosts />
      </main>
      <h1>{data.name}</h1>
      <footer>Copyright material</footer>
    </>
  );
}
