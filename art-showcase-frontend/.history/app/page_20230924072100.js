import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./components/nav"
import Events from "./components/home/events"
import fs from "fs"
import path from "path";


export default async function Home() {
  //fetch function to load event files and paginated amount of Trending posts
  fs.readFile(path.join(process.cwd(),"app", "next.png"), (err, data)=>{
    
  })
  
}
