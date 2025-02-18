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
        <div className={styles.content}>
            <h1>Skills</h1>
            <main>
              <p>
                Java; Python; SQL; HTML; CSS; JavaScript; TypeScript; C; C++; React; ROS 2; Django; FastAPI; Tailwind CSS; D3.js; numpy; matplotlib; Git; Github; Jupyter; Poetry; Vite; Firebase; Docker
              </p>
            </main>
        </div>
    )
}