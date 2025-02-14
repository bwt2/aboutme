import type { Route } from ".react-router/types/app/routes/home/+types/Home";
import styles from "./Home.module.css";

import Navbar from "../navbar/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "btja" },
    { name: "Home Page", content: "Welcome to my website" },
  ];
}

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Navbar/>
        <h1>Site Under Construction . . .</h1>
      </main>
    </>
  );
}