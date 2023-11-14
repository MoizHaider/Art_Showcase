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
    `
  };
  await fetch(
    "http://localhost:8080/graphql",
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(graphqlQuery),
    }
  )
    .then((resp) => resp.json())
    .then((data) => console.log(data));
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
      <footer>Copyright material</footer>
    </>
  );
}
