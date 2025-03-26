import type { Route } from "./+types/Experience";
import styles from "./Experience.module.css";
import contentStyles from "./Content.module.css";

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
                <ol className={styles.expList}>
                    <ExperienceEntry
                        company={"Sydney Interplanetary Rover Initiative (SIRI)"}
                        date={"Apr. 2024 - Present"}
                        title={"Software Developer (Controls)"}
                        location={"Sydney, NSW"}
                    >
                        <li>Written spin and active front rear steering ROS2 C++ controller for autonomous and manual rover steering control.</li>
                        <li>Written estop keep alive ROS2 C++ nodes, ensuring wireless connectivity between rover and base station at all times.</li>
                        <li>Developing the rover base station UI using Foxglove and React, displaying rover sensor data for the rover's operator.</li>
                        <li>Simulating and visualizing rover sensor and physics using Gazebo and Rviz, rewriting launch files from xml to Python, creating base URDF using xacro, containerizing using Docker. Written documentation on an Astro site using React.</li>
                    </ExperienceEntry>
                    <ExperienceEntry
                        company={"USYD Cybersecurity Society"}
                        date={"Jul. 2024 - Dec. 2024"}
                        title={"Software Developer (Backend)"}
                        location={"Sydney, NSW"}
                    >
                        <li>Created Django REST framework API endpoints retrieving team data from PostgreSQL database for the initial version of the society's website</li>
                        <li>Added tooling to automatically generate database schema diagrams for documentation purposes</li>
                    </ExperienceEntry>
                    <ExperienceEntry
                        company={"Sydney Institute for Astronomy (SIfA)"}
                        date={"Feb. 2024 - May. 2024"}
                        title={"Undergraduate Research Assistant"}
                        location={"Sydney, NSW"}
                    >
                        <li>Created automated data retrieval and crossmatching Python program using the Astroquery CASDA API to investigate viability of exoplanet detection by radio waves, found 2 candidate planetary systems satisfying criteria</li>
                    </ExperienceEntry>
                    <ExperienceEntry
                        company={"Sydney Institute for Astronomy (SIfA)"}
                        date={"Aug. 2023 - Dec. 2023"}
                        title={"Undergraduate Research Assistant"}
                        location={"Sydney, NSW"}
                    >
                        <li>Analyzed MEERKAT radio telescope time series data using pandas, numpy, and matplotlib to document changes from a particular fast radio burst (FRB) from 2019-2022, narrowing down theoretical models for the FRB's source</li>
                    </ExperienceEntry>
                    <ExperienceEntry
                        company={"Coles Group"}
                        date={"Feb. 2023 - Oct. 2023"}
                        title={"Service and Trolleys Team Member"}
                        location={"Sydney, NSW"}
                    >
                        <li>Coordinating with service team to keep store clean, supply trolleys, and assisting customers throughout the day</li>
                    </ExperienceEntry>
                </ol>
            </main>
        </div>
    )
}

interface ExperienceEntryProps {
    company: string,
    date: string,
    title: string, 
    location: string,
    children: React.ReactNode
}

function ExperienceEntry({company, date, title, location, children} : ExperienceEntryProps){
    return (
        <li className={styles.exp}>
            <div className={styles.expBorder}/>
            <div className={contentStyles.expContent}>
                <h1>{company}</h1>
                <h2>{title}</h2>
                <h3>{date}  ☆  {location}</h3>
                <ul>
                    {children}
                </ul>
            </div>
        </li>
    )
}