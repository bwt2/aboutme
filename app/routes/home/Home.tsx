import type { Route } from ".react-router/types/app/routes/home/+types/Home";
import type { navItem, star } from "~/types/types";
import { useState } from "react";
import styles from "./Home.module.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Main from "../../components/main/Main";
import AboutMe from "../about-me/AboutMe";
import Education from "../education/Education";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "btja" },
    { name: "Home Page", content: "Welcome to my website" },
  ];
}

export default function Home() {
  const [active, setActive] = useState<navItem | null>(null);
  const [hovered, setHovered] = useState<star | null>(null);

  return (
    <>
      <Navbar 
        active={active} 
        setActive={setActive}
        setHovered={setHovered}
      />
      <div className={styles.layout}>
        <Main 
          hovered={hovered}
          setHovered={setHovered}
        />
      </div>
      <AboutMe/>
      <Footer/>
    </>
  );
}