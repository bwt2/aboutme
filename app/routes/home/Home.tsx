import type { Route } from ".react-router/types/app/routes/home/+types/Home";
import type { navItem, star } from "~/types/types";
import React, { useState, useRef, useEffect } from "react";
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
  const outletRef: React.RefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);
  const introRef: React.RefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);
  const location: Location = useLocation();

  useEffect(() => {
    const outletRendered: boolean = outletRef.current?.innerHTML !== "";
    if (outletRendered) {
      outletRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);

  return (
    <>
      <div className={styles.container}>
        <Intro introRef={introRef}/>
        <NavBarAndMain introRef={introRef}/>
      </div>
      <div ref={outletRef}>
        <Outlet/>
      </div>
      <Footer/>
      <div className={styles.bgGradient}/>
    </>
  );
}

function NavBarAndMain ({introRef} : {introRef: React.RefObject<HTMLDivElement | null>}) {
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
      introRef={introRef}
    />
  </>
  )
}

function Intro ({introRef} : {introRef: React.RefObject<HTMLDivElement | null>}) {
  return (
    <div ref={introRef}>
      <div className={styles.intro}>
        <h1>
          Brian Tjahjadi
        </h1>
        <ul>
          <li>Full-Stack Developer</li>
          <li>Robotics Software Engineer</li>
          <li>
            <a target="_blank" href="https://slidle.vercel.app" style={{ 
              position: 'relative', 
              textDecoration: 'none', 
              color: 'inherit', 
              zIndex: '99'
            }}>
              Aspiring Game Developer
            </a>
          </li>
        </ul>
        <p style={{ color: 'white', alignSelf: 'center', textAlign: 'left', marginTop: '1rem', lineHeight: '1.5rem'}}>
          This is a <span style={{ color: 'red', fontWeight: 'bolder' }}>Early Development Build</span> of the site, stay tuned for updates!
        </p>
      </div>
    </div>
  )
}