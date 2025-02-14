import type { navItem, star } from "~/types/types";
import styles from "./Navbar.module.css";
import { navStarMap } from "~/utils/map";

type setActiveHook = React.Dispatch<React.SetStateAction<navItem>>;
type setHoveredHook = React.Dispatch<React.SetStateAction<star | null>>;

export default function Navbar(
  { active, setActive, setHovered } : { active: navItem, setActive: setActiveHook, setHovered: setHoveredHook }
){
  const navItems: navItem[] = ["Home", "About Me", "Education", "Experience", "Projects", "Skills"];

  return (
    <nav className={styles.nav}>
        <ul>
          {navItems.map((navItem, index) => {
            return <>
              <li 
                key={navItem}
                className={active === navItem ? styles.active : ""}
                onClick={() => setActive(navItem)}
                onMouseEnter={() => setHovered(navStarMap(navItem))}
                onMouseLeave={() => setHovered(null)}
              >
                {navItem}
              </li>
              { index !== 5 && <li key={index} className={styles.border}/>}
            </>
          })}
        </ul>
    </nav>
  );
}