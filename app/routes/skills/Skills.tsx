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
              <ul className={styles.skillList}>
                <li className={styles.skillCategory}>
                  <h2>Frontend</h2>
                  <ul>
                    <li>React</li>
                    <li>Remix / React Router v7</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>TailwindCSS</li>
                    <li>D3.js</li>
                  </ul>
                </li>
                <li className={styles.skillCategory}>
                  <h2>Backend and Databases</h2>
                  <ul>
                    <li>Python</li>
                    <li>Django</li>
                    <li>FastAPI</li>
                    <li>SQLAlchemy</li>
                    <li>PostgreSQL</li>
                    <li>MySQL</li>
                  </ul>
                </li>
                <li className={styles.skillCategory}>
                  <h2>DevOps and Tooling</h2>
                  <ul>
                    <li>Git</li>
                    <li>Github</li>
                    <li>Poetry</li>
                    <li>Vite</li>
                    <li>Docker</li>
                    <li>Linux (WSL2 Ubuntu)</li>
                  </ul>
                </li>
                <li className={styles.skillCategory}>
                  <h2>Robotics</h2>
                  <ul>
                    <li>ROS 2</li>
                    <li>ROS 2 Control</li>
                    <li>C++</li>
                    <li>Python</li>
                  </ul>
                </li>
                <li className={styles.skillCategory}>
                  <h2>Data Science</h2>
                  <ul>
                    <li>Python</li>
                    <li>numpy</li>
                    <li>matplotlib</li>
                    <li>Jupyter</li>
                  </ul>
                </li>
                <li className={styles.skillCategory}>
                  <h2>Other</h2>
                  <ul>
                    <li>Java</li>
                    <li>C</li>
                  </ul>
                </li>
              </ul>
            </main>
        </div>
    )
}