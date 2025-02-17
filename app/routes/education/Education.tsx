import styles from "./Education.module.css";

export default function Education() {
    return (
        <div className={styles.content}>
            <h1>Education</h1>
            <main>
                <p>
                    <span>The University of Sydney</span> <br/>				                     	                        
                    Feb. 2022 - Jan. 2026 <br/>	
                    Bachelor of Advanced Computing, Majors: Software Development and Physics <br/>				            
                    Sydney, NSW <br/>	
                    82.10 WAM <br/>	
                    USYD eSports (SUSOG): player, AAOL'23 Season 4 Division 3 Winner <br/>	
                    Sydney Computing Society (SYNCS): member <br/>	
                </p>
                <p>
                    <span>IPEKA Integrated Christian School</span> <br/>	
                    2021 <br/>				                     	                        
                    High School <br/>				            
                    Jakarta, Indonesia <br/>	
                    ATAR: 90.55, SAT: 1470 <br/>	
                    Best in Mathematics Extension 1 2021 <br/>	
                </p>
            </main>
        </div>
    )
}