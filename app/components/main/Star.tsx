import { type RefObject } from "react";
import { Link } from "react-router";
import type { starRef, star, starData, setHoveredHook, navItem, setActiveHook } from "~/types/types";
import styles from "./Main.module.css";

interface StarProps {
    hovered: star | null,
    setHovered: setHoveredHook,
    data: starData,
    style: CSSModuleClasses[string],
    refList: RefObject<starRef>,
    active: navItem | null,
    setActive: setActiveHook
}

export default function Star ({hovered, setHovered, data, style, refList, active, setActive}: StarProps) {
    const decor = (<>
        {data.navItem &&
            <div className={styles.starAnnotation}>
                <h1>{data.navIndex && data.navIndex.toString().padStart(2, "0")}</h1>
                <p>{data.navItem}</p>
            </div>
        }
        {data.navItem ?
            <div className={`
                ${styles.starDecor} 
                ${((active !== data.navItem) && (hovered !== data.star)) && styles.starDecorOff}
            `}>
                ✶ 
            </div>
            :
            <div className={`
                ${styles.starDecor} 
                ${(hovered !== data.star) && styles.starDecorOff}
            `}>
                ✶ 
            </div>
        }

    </>);
    
    return (
      data.navItem !== null ? (
        <Link 
          className={`${styles.link} ${styles.star} ${style}`}
          onMouseEnter={() => setHovered(data.star)}
          onMouseLeave={() => setHovered(null)}
          onClickCapture={() => setActive(data.navItem)}
          to={`/${data.navItem}`}
          ref={(elem: HTMLAnchorElement) => {refList.current[data.star] = elem;}}
        >
            {decor}
        </Link> 
      ) : (
        <div 
          className={`${styles.star} ${style}`}
          onMouseEnter={() => setHovered(data.star)}
          onMouseLeave={() => setHovered(null)}
          ref={(elem: HTMLDivElement) => {refList.current[data.star] = elem;}}
        >
            {decor}
        </div> 
      )
    )
  }