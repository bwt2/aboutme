import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        <li><a target="_blank" href="https://www.linkedin.com/in/brian-tjahjadi/">Linkedin</a></li>
        <li><a target="_blank" href="https://github.com/bwt2">GitHub</a></li>
      </ul>
    </footer>
  );
}