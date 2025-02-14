import styles from "./Navbar.module.css";

type navItem = "Home" | "About Me" | "Education" | "Experience" | "Projects" | "Skills";
type setActiveHook = React.Dispatch<React.SetStateAction<navItem>>;

export default function Navbar({ active, setActive } : { active: navItem, setActive: setActiveHook}){
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
              >
                {navItem}
              </li>
              { index !== 5 && <li key={index} className={styles.border}></li>}
            </>
          })}
        </ul>
    </nav>
  );
}