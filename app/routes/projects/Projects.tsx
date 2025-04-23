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
        <div className={styles.content}>
            <h1>Projects</h1>
            <main>
              <ProjectEntry
                title={"Game Based Learning"}
                link={null}
                linkName={null}
              >
                <li>A full stack web app Gemini based AI learning tool that allows users to upload any pdf file to get practice questions, sample answers, feedback, and AI tutor tailored to the content of the file.</li>
                <li>Led team of 7 peers from concept to delivery of web app, ensuring client satisfaction during development cycle.</li>
                <li>Responsible for backend REST API endpoints and CRUD operations using Python FastAPI, MySQL database design and management using SQLAlchemy, unit and integration tests using pytest, and containerization using Docker.</li>
              </ProjectEntry>
              <ProjectEntry
                title={"Beacon Visualizer"}
                link={"https://github.com/Davadakus/ANT61Hackathon"}
                linkName={"github.com/Davadakus/ANT61Hackathon"}
              >
                <li>Finalist project for the 2024 USRC USYD Hackathon. Interactive data visualization of orientation, position, altitude data of a satellite beacon device using React, Typescript, and TailwindCSS visualized using D3.js and Three.js.</li>
              </ProjectEntry>
              <ProjectEntry
                title={"Slidle"}
                link={"https://slidle.vercel.app"}
                linkName={"slidle.vercel.app"}
              >
                <li>Finalist project for the 2024 USRC USYD Hackathon. Interactive data visualization of orientation, position, altitude data of a satellite beacon device using React, Typescript, and TailwindCSS visualized using D3.js and Three.js.</li>
              </ProjectEntry>
            </main>
        </div>
    )
}

interface ProjectEntryProps {
  title: string,
  link: string | null,
  linkName: string | null,
  children: React.ReactNode | null
}

function ProjectEntry({ title, link, linkName, children} : ProjectEntryProps) {
  return (
    <p>
      <h1>{title}</h1><br/>
      {(link && linkName) &&
        <h2>
          <a target="_blank" style={{textDecoration: "underline", color: "white"}} href={link}>{linkName}</a><br/>
        </h2>
      }
      <ul>
        {children}
      </ul>
    </p>
  )
}