import type { Route } from ".react-router/types/app/routes/home/+types/Home";
import styles from "./Home.module.css";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Main from "../main/Main";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "btja" },
    { name: "Home Page", content: "Welcome to my website" },
  ];
}

export default function Home() {
  return (
    <>
      <div className={styles.layout}>
        <Main/>
        <Navbar/>
        <Footer/>
      </div>
    </>
  );
}