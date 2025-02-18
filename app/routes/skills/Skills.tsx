import type { Route } from "./+types/Skills";
import styles from "./Skills.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "btja | Skills" },
    { name: "Skills", content: "List of tech stacks i've used"}
  ]
}

export default function Skills() {
    return (
        <div className={styles.temp}>
            Skills
        </div>
    )
}