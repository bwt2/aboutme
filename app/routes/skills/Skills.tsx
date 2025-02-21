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
                <SkillCategory heading={"Frontend"}>
                  <li>React</li>
                  <li>Remix / React Router v7</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>TailwindCSS</li>
                  <li>D3.js</li>
                </SkillCategory>
                <SkillCategory heading={"Backend and Databases"}>
                  <li>Python</li>
                  <li>Django</li>
                  <li>FastAPI</li>
                  <li>SQLAlchemy</li>
                  <li>PostgreSQL</li>
                  <li>MySQL</li>
                </SkillCategory>
                <SkillCategory heading={"DevOps and Tooling"}>
                  <li>Git</li>
                  <li>Github</li>
                  <li>Poetry</li>
                  <li>Vite</li>
                  <li>Docker</li>
                  <li>Linux (WSL2 Ubuntu)</li>
                </SkillCategory>
                <SkillCategory heading={"Robotics"}>
                  <li>ROS 2</li>
                  <li>ROS 2 Control</li>
                  <li>C++</li>
                  <li>Python</li>
                </SkillCategory>
                <SkillCategory heading={"Data Science"}>
                  <li>Python</li>
                  <li>numpy</li>
                  <li>matplotlib</li>
                  <li>Jupyter</li>
                </SkillCategory>
                <SkillCategory heading={"Other"}>
                  <li>Java</li>
                  <li>C</li>
                </SkillCategory>
              </ul>
            </main>
        </div>
    )
}

function SkillCategory({heading, children}: {heading: string, children: React.ReactNode | null}) {
  return (
    <li className={styles.skillCategory}>
      <h2>{heading}</h2>
      <ul>
        {children}
      </ul>
    </li>
  )               
}