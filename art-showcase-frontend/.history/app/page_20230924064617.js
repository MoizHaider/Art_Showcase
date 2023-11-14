import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./components/nav"
import Events from "./components/home/events"
import fs from "fs"
import path from "path";


export default async function Home() {
  //fetch function to load event files and paginated amount of Trending posts
  const svg = await fs.readFile(path.join(__dirname, "..", "/public", "next.svg"), (err)=>{});
  console.log(svg)
  return (
    <>
      <Nav data = "Hello"/>
      <header>Welcome page</header>
        <main  className = 'main'>
          <Events svg = {svg}/>
        </main>
      <main>Highest Rated Arts</main>
      <footer>Copyright material</footer>
    </>
  );
}
