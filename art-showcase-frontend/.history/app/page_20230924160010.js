import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./components/Nav";
import Events from "./components/home/Events";
import TrendingPosts from "./components/home/TrendingPosts/TrendingPosts";


export default async function Home() {
  //fetch function to load event files and paginated amount of Trending posts
  await fetch("")
  return (
    <>
      <Nav/>
      <header>Welcome page</header>
      <main className="main">
        <Events />
      </main>
      <main>
        <TrendingPosts/>
      </main>
      <footer>Copyright material</footer>
    </>
  );
}
