import type { Route } from "./+types/AboutMe";
import styles from "./AboutMe.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "btja | About Me" },
    { name: "About Me", content: "Introducing myself"}
  ]
}

export default function AboutMe() {
    return (
        <div className={styles.temp}>
            About Me
        </div>
    )
}