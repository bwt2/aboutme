import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
        <ul>
            <li>Home</li>
            <li className={styles.border}></li>
            <li>About Me</li>
            <li className={styles.border}></li>
            <li>Education</li>
            <li className={styles.border}></li>
            <li>Experience</li>
            <li className={styles.border}></li>
            <li>Projects</li>
            <li className={styles.border}></li>
            <li>Skills</li>
        </ul>
    </nav>
  );
}