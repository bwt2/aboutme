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
                        company={"oNex"}
                        date={"Apr. 2025 - Present"}
                        title={"Software Developer"}
                        location={"Sydney, NSW"}
                        link={"https://www.onex.social/"}
                    >
                        <span>Translating Figma designs into mobile user interfaces using React Native and TailwindCSS, while integrating GraphQL backend services via Relay for efficient data fetching.
                        </span>
                    </ExperienceEntry>
                    <ExperienceEntry
                        company={"Sydney Interplanetary Rover Initiative (SIRI)"}
                        date={"Apr. 2024 - Present"}
                        title={"Software Developer"}
                        location={"Sydney, NSW"}
                        link={"https://sydneyrover.com/"}
                    >
                        <span>SIRI rover software code and docs maintainer. Developing software for the SIRIUS rover, to be used in the 2026 Australian Rover Challenge and University Rover Challenge.</span>
                        <li style={{ marginTop: '1rem'}}>Written spin and active front rear steering ROS2 C++ controller for autonomous and manual rover steering control</li>
                        <li>Developing the rover base station GUI using Foxglove and React. Allowing rover operator to remotely send commands to the rover and  collect data from it</li>
                        <li>Simulating and visualizing rover sensor and physics using Gazebo and Rviz, rewriting launch files from xml to Python, creating base URDF of rover using xacro, containerizing using Docker.</li>
                        <li>Written internal documentation on an Astro site using React and the rehype-mermaid plugin for mermaid diagrams</li>
                    </ExperienceEntry>
                    <ExperienceEntry
                        company={"USYD Cybersecurity Society"}
                        date={"Jul. 2024 - Dec. 2024"}
                        title={"Software Developer"}
                        location={"Sydney, NSW"}
                        link={"https://usydcyber.com/"}
                    >   <span>Backend developer for society's website.</span>
                        <li style={{ marginTop: '1rem'}}>Created Django REST framework API endpoints retrieving team data from PostgreSQL database for the initial version of the society's website</li>
                        <li>Added tooling to automatically generate database schema diagrams for documentation purposes</li>
                    </ExperienceEntry>
                    <ExperienceEntry
                        company={"Sydney Institute for Astronomy (SIfA) - Radio Transients"}
                        date={"Feb. 2024 - May. 2024"}
                        title={"Undergraduate Research Assistant"}
                        location={"Sydney, NSW"}
                        link={"https://sifa.sydney.edu.au/research/#Radio-Transients"}
                    >
                        <span>Created automated data retrieval and crossmatching Python program using the Astroquery CASDA API to investigate viability of exoplanet detection by radio waves, found 2 candidate planetary systems satisfying criteria</span>
                    </ExperienceEntry>
                    <ExperienceEntry
                        company={"Sydney Institute for Astronomy (SIfA) - Radio Transients"}
                        date={"Aug. 2023 - Dec. 2023"}
                        title={"Undergraduate Research Assistant"}
                        location={"Sydney, NSW"}
                        link={"https://sifa.sydney.edu.au/research/#Radio-Transients"}
                    >
                        <span>Analyzed MEERKAT radio telescope time series data using pandas, numpy, and matplotlib to document changes from a particular fast radio burst (FRB) from 2019-2022, narrowing down theoretical models for the FRB's source</span>
                    </ExperienceEntry>
                    <ExperienceEntry
                        company={"Coles Group"}
                        date={"Feb. 2023 - Oct. 2023"}
                        title={"Service and Trolleys Team Member"}
                        location={"Sydney, NSW"}
                    >
                        <span>Coordinating with service team to keep store clean, supply trolleys, and assisting customers throughout the day</span>
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
    link?: string | null
    children: React.ReactNode
}

function ExperienceEntry({company, date, title, location, children, link = null} : ExperienceEntryProps){
    return (
        <li className={styles.exp}>
            <div className={styles.expBorder}/>
            <div className={contentStyles.expContent}>
                <h1>{link ? <a href={link}>{company}  <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 -960 960 960" fill="#e3e3e3"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg></a> : company}</h1>
                <h2>{title}</h2>
                <h3>{date}  ☆  {location}</h3>
                <ul>
                    {children}
                </ul>
            </div>
        </li>
    )
}