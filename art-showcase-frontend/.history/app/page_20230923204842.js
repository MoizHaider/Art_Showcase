import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header>Welcome page</header>
      <main  className=styles>events</main>
      <main>Highest Rated Arts</main>
      <footer>Copyright material</footer>
    </>
  );
}
