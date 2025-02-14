import styles from "./Main.module.css";

type navItem = "Home" | "About Me" | "Education" | "Experience" | "Projects" | "Skills";
type setActiveHook = React.Dispatch<React.SetStateAction<navItem>>;

export default function Main({ active, setActive } : { active: navItem, setActive: setActiveHook}) {
  return (
    <main className={styles.main}>
      <div className={`${styles.star} ${styles.denebola}`}></div>
      <div className={`${styles.star} ${styles.theta}`}></div>
      <div className={`${styles.star} ${styles.delta}`}></div>
      <div className={`${styles.star} ${styles.regulus} ${active === "About Me" ? styles.starActive : ""}`}></div>
      <div className={`${styles.star} ${styles.eta}`}></div>
      <div className={`${styles.star} ${styles.gamma}`}></div>
      <div className={`${styles.star} ${styles.zeta}`}></div>
      <div className={`${styles.star} ${styles.mu}`}></div>
      <div className={`${styles.star} ${styles.epsilon}`}></div>
    </main>
  );
}