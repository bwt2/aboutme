import type { Route } from ".react-router/types/app/routes/home/+types/Home";
import styles from "./Home.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
  <main className={styles.main}>
    <h1>Site Under Construction . . .</h1>
  </main>
  );
}