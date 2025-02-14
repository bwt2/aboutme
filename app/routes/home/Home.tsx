import type { Route } from ".react-router/types/app/routes/home/+types/Home";
import { useState } from "react";

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
  type navItem = "Home" | "About Me" | "Education" | "Experience" | "Projects" | "Skills";
  const [active, setActive] = useState<navItem>("Home");

  return (
    <>
      <Navbar active={active} setActive={setActive}/>
      <div className={styles.layout}>
        <Main active={active} setActive={setActive}/>
      </div>
      <Footer/>
    </>
  );
}