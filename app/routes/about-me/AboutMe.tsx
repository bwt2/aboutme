import type { Route } from "./+types/AboutMe";
import styles from "./AboutMe.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "btja | About Me" },
    { name: "About Me", content: "Introducing myself"}
  ]
}

export default function AboutMe() {
    return (
        <div className={styles.content}>
            <h1>About Me</h1>
            <main style={{ paddingBottom: '5rem'}}>
              <p>I enjoy programming to make ideas come to life.</p>
            </main>
        </div>
    )
}