import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./components/Nav";
import Events from "./components/home/Events";


export default async function Home() {
  //fetch function to load event files and paginated amount of Trending posts
  return (
    <>
      <Nav data="Hello" />
      <header>Welcome page</header>
      <main className="main">
        <Events />
      </main>
      <main>
        Highest Rated Arts
      </main>
      <footer>Copyright material</footer>
    </>
  );
}
