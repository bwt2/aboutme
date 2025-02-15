import type { Route } from ".react-router/types/app/routes/home/+types/Home";
import type { navItem, star } from "~/types/types";
import { useState, useRef, useEffect } from "react";
import styles from "./Home.module.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Main from "../../components/main/Main";
import { Outlet, useLocation, type Location } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "btja" },
    { name: "Home Page", content: "Welcome to my website" },
  ];
}

export default function Home() {
  const [active, setActive] = useState<navItem | null>(null);
  const [hovered, setHovered] = useState<star | null>(null);
  const outletRef: React.RefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);
  const location: Location = useLocation();

  useEffect(() => {
    if (outletRef.current) {
      outletRef?.current.scrollIntoView({ behavior: "smooth", block: "center"});
    }
  }, [location]);

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
      <div ref={outletRef}>
        <Outlet/>
      </div>
      <Footer/>
      <div className={styles.bgGradient}/>
    </>
  );
}