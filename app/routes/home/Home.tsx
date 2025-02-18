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
    { title: "btja | Home" },
    { name: "Home Page", content: "Welcome to my website" },
  ];
}

export default function Home() {
  const [active, setActive] = useState<navItem | null>(null);
  const [hovered, setHovered] = useState<star | null>(null);
  const outletRef: React.RefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);
  const introRef: React.RefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);
  const location: Location = useLocation();

  useEffect(() => {
    if (outletRef.current) {
      outletRef?.current.scrollIntoView({ behavior: "smooth", block: "center"});
    }
    if (outletRef.current?.innerHTML !== "") { // can be improved
      document.body.style.overflow = "visible";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [location]);

  useEffect(() => {
    const handleLoad = () => {
      if (introRef.current){
        introRef.current.style.opacity = "100%";
      }
    };
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }
    return () => window.removeEventListener("load", handleLoad);
  }, [])

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
          active={active}
          setActive={setActive}
        />
        <div ref={introRef} style={{ opacity: "0", transition: "opacity 2s ease-in-out"}}>
          <Intro/>
        </div>
      </div>
      <div ref={outletRef}>
        <Outlet/>
      </div>
      <Footer/>
      <div className={styles.bgGradient}/>
    </>
  );
}

function Intro () {
  return (
    <div className={styles.intro}>
      <h1>
        B<span>rian</span> <br/> 
        tja<span>hjadi</span>
      </h1>
      <p>Full-Stack Developer | Robotics Software Engineer | Game Developer</p>
    </div>
  )
}