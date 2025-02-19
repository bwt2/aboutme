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
  const layoutRef: React.RefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);
  const outletRef: React.RefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);
  const introRef: React.RefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);
  const location: Location = useLocation();

  useEffect(() => {
    outletRef.current?.scrollIntoView({ behavior: "smooth", block: "center"});
  }, [location]);

  useEffect(() => {
    const handleLoad = () => {
      if (introRef.current) introRef.current.style.opacity = "100%";
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
      <div className={styles.container}>
        <NavBarAndMain/>
        <Intro introRef={introRef}/>
      </div>
      <div ref={outletRef}>
        <Outlet/>
      </div>
      <Footer/>
      <div className={styles.bgGradient}/>
    </>
  );
}

function NavBarAndMain () {
  const [active, setActive] = useState<navItem | null>(null);
  const [hovered, setHovered] = useState<star | null>(null);

  return (
  <>
    <Navbar 
      active={active} 
      setActive={setActive}
      setHovered={setHovered}
    />
    <Main 
      hovered={hovered}
      setHovered={setHovered}
      active={active}
      setActive={setActive}
    />
  </>
  )
}

function Intro ({introRef} : {introRef: React.RefObject<HTMLDivElement | null>}) {
  return (
    <div ref={introRef} style={{ opacity: "0", transition: "opacity 2s ease-in-out"}}>
      <div className={styles.intro}>
        <h1>
          B<span>rian</span> <br/> 
          tja<span>hjadi</span>
        </h1>
        <p>Full-Stack Developer | Robotics Software Engineer | Game Developer</p><br/>
        <p>This is a <span style={{ color: 'red', fontWeight: 'bolder' }}>Pre-Alpha version</span> of the site, stay tuned for updates!</p>
      </div>
    </div>
  )
}