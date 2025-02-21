import type { Route } from "./+types/Education";
import styles from "./Education.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "btja | Education" },
    { name: "Education", content: "Past education history"}
  ]
}

export default function Education() {
    return (
        <div className={styles.content}>
            <h1>Education</h1>
            <main>
                <p>
                    <span>The University of Sydney</span> <br/>				                     	                        
                    Feb. 2022 - Jan. 2026 <br/>	
                    Bachelor of Advanced Computing, Majors: Software Development and Physics <br/>				            
                    82.10 WAM <br/>	
                </p>
            </main>
        </div>
    )
}