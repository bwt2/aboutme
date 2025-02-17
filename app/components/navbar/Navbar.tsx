import { Link } from "react-router";
import type { navItem, star, setActiveHook, setHoveredHook, starData, navbarStarData } from "~/types/types";
import styles from "./Navbar.module.css";
import navStarData from "~/data/navStar.json";

interface NavBarProps {
  active: navItem | null, 
  setActive: setActiveHook, 
  setHovered: setHoveredHook
}

export default function Navbar({ active, setActive, setHovered } : NavBarProps){
  const navbarStarData: navbarStarData[] = 
    navStarData
    .filter(data => data.navItem !== null && data.navIndex !== null)
    .sort((a,b) => a.navIndex - b.navIndex) as navbarStarData[];
  

  return (
    <nav className={styles.nav}>
        <ul>
          {navbarStarData.map((data, index) => {
            return <>
              <li 
                key={data.navIndex}
                onClick={() => setActive(data.navItem)}
                onMouseEnter={() => setHovered(data.star)}
                onMouseLeave={() => setHovered(null)}
              >
                <Link 
                  key={data.navItem}
                  className={`${styles.link} ${active === data.navItem ? styles.active : ""}`} 
                  to={`/${data.navItem}`}
                >
                  {data.navItem}
                </Link>
              </li>
              { index !== (navbarStarData.length-1) && <li key={`b-${index}`} className={styles.border}/>}
            </>
          })}
        </ul>
    </nav>
  );
}