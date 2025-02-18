import type { Route } from "./+types/Projects";
import styles from "./Projects.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "btja | Projects" },
    { name: "Projects", content: "Some notable projects i've worked on" },
  ];
}

export default function Projects() {
    return (
        <div className={styles.temp}>
            Projects
        </div>
    )
}