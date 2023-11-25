import Image from "next/image";
import styles from "./page.module.css";
import Events from "./components/home/Events";
import TrendingPosts from "./components/Post/Post";
import LoadMorePosts from "./components/Post/LoadMorePosts";
import { useRouter } from "next/navigation";


export default function Home() {

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
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

  useEffect(() => {
    const response = fetch("http://localhost:8080/graphql", {
      method: "post",
      headers: {
        Authorization: "Bearer "+token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(graphqlQuery),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data)
      }).catch(err=>{
        console.log(err)
      })
      
  }, []);

  return (
    <>
      <header >Welcome page</header>
      <main className="main">
        <Events />
      </main>
      <main>
      </main>
      <LoadMorePosts type="homePosts" />
      <footer>Copyright material</footer>
    </>
  );
}
