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
                    Written spin and active front rear steering ROS2 controller in C++ for finer control during rover recovery scenarios, deriving and implementing forward kinematics, inverse kinematics, and odometry <br/>	
                    Simulating rover sensor and physics using Gazebo and Rviz. Rewriting launch files to use Python, modularizing URDF using xacro, containerizing using Docker <br/>	
                    Written internal documentation on an Astro site using React and the rehype-mermaid plugin for mermaid diagrams
                </p>
                <p>
                    <span>USYD Cybersecurity Society</span>	 <br/>						                        
                    Jul. 2024 - Dec. 2024  <br/>
                    Software Developer (Backend)  <br/>									            
                    Sydney, NSW  <br/>
                    Created Django REST framework API endpoints retrieving team data from PostgreSQL database for the initial version of the society's website. <br/>
                    Added tooling to automatically generate database schema diagrams for documentation purposes.
                </p>
                <p>
                    <span>Sydney Institute for Astronomy (SIfA)</span> <br/>									                        
                    Feb. 2024 - May. 2024 <br/>
                    Undergraduate Research Assistant <br/>									   
                    Sydney, NSW <br/>
                    Created automated data retrieval and crossmatching Python program using the Astroquery CASDA API to investigate viability of exoplanet detection by radio waves, found 2 candidate planetary systems satisfying criteria.
                </p>
                <p>
                    <span>Sydney Institute for Astronomy (SIfA)</span> <br/>									                        
                    Aug. 2023 - Dec. 2023 <br/>
                    Undergraduate Research Assistant <br/>									   
                    Sydney, NSW <br/>
                    Analyzed MEERKAT radio telescope time series data using pandas, numpy, and matplotlib to document changes from a particular fast radio burst (FRB) from 2019-2022, narrowing down theoretical models for the FRB's source.
                </p>
                <p>
                    <span>Coles Group</span> <br/>									                        
                    Feb. 2023 - Oct. 2023 <br/>
                    Service and Trolleys Team Member <br/>									   
                    Sydney, NSW <br/>
                    Coordinating with service team to keep store clean, supply trolleys, and assisting customers throughout the day.
                </p>
            </main>
        </div>
    )
}