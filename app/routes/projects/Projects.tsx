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
              <p>
                <span>Game Based Learning App</span><br/>							             
                Capstone project, a fullstack web app Gemini based AI learning tool that allows users to upload any pdf file to get practice questions, sample answers, feedback, and AI tutor tailored to the content of the file. <br/>
                Led team of 7 peers from concept to delivery of web app, ensuring client satisfaction during development cycle. <br/>
                Responsible for backend REST API endpoints and CRUD operations using FastAPI, MySQL database design and management using SQLAlchemy, unit and integration tests using pytest, and containerization using Docker.
              </p>
              <p>
              <span>Beacon Visualizer</span><br/>		
              <a target="_blank" style={{textDecoration: "underline", color: "white"}} href="https://github.com/Davadakus/ANT61Hackathon">github.com/Davadakus/ANT61Hackathon</a><br/> 						           
                Finalist project for the 2024 USRC USYD Hackathon. Interactive data visualization of orientation, position, altitude data of a satellite beacon device using React, Typescript, and TailwindCSS visualized using D3.js and Three.js. 
              </p>
              <p>
                <span>Slidle</span><br/>								                                                          
                <a target="_blank" style={{textDecoration: "underline", color: "white"}} href="https://slidle.vercel.app">slidle.vercel.app</a><br/>
                Sliding puzzle game written in React, hosted using Vercel. Responsive layout and controls for mobile and desktop.
              </p>
            </main>
        </div>
    )
}