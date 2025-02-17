import { type RefObject } from "react";
import { Link } from "react-router";
import type { starRef, star, starData, setHoveredHook } from "~/types/types";
import styles from "./Main.module.css";

interface StarProps {
    hovered: star | null;
    setHovered: setHoveredHook;
    data: starData;
    style: CSSModuleClasses[string];
    refList: RefObject<starRef>;
}

export default function Star ({hovered, setHovered, data, style, refList}: StarProps) {
    return (
      data.navItem !== null ? (
        <Link 
          className={`${styles.link} ${styles.star} ${style}`}
          onMouseEnter={() => setHovered(data.star)}
          onMouseLeave={() => setHovered(null)}
          to={`/${data.navItem}`}
          ref={(elem: HTMLAnchorElement) => {refList.current[data.star] = elem;}}
        >
          {data.navItem &&
            <div className={styles.starAnnotation}>
              <h1>{data.navIndex && data.navIndex.toString().padStart(2, "0")}</h1>
              <p>{data.navItem}</p>
            </div>
          }
          { hovered === data.star && <div className={styles.starDecor}/>}
        </Link> 
      ) : (
        <div 
          className={`${styles.star} ${style}`}
          onMouseEnter={() => setHovered(data.star)}
          onMouseLeave={() => setHovered(null)}
          ref={(elem: HTMLDivElement) => {refList.current[data.star] = elem;}}
        >
          {data.navItem &&
            <div className={styles.starAnnotation}>
              <h1>{data.navIndex && data.navIndex.toString().padStart(2, "0")}</h1>
              <p>{data.navItem}</p>
            </div>
          }
          { hovered === data.star && <div className={styles.starDecor}/>}
        </div> 
      )
    )
  }