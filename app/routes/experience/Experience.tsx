import type { Route } from "./+types/Experience";
import styles from "./Experience.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "btja | Experience" },
    { name: "Experience", content: "History of my past work, research, and extracurriculars" },
  ];
}

export default function Experience() {
    return (
        <div className={styles.content}>
            <h1>Experience</h1>
            <main>
                <p>
                    <span>Sydney Interplanetary Rover Initiative (SIRI)</span> <br/>						         	
                    Apr. 2024 - Present  <br/>	
                    Software Developer (Controls)  <br/>			 							            
                    Sydney, NSW  <br/>	
                </p>
                <p>
                    <span>USYD Cybersecurity Society</span>	 <br/>						                        
                    Jul. 2024 - Dec. 2024  <br/>
                    Software Developer (Backend)  <br/>									            
                    Sydney, NSW  <br/>
                </p>
            </main>
        </div>
    )
}