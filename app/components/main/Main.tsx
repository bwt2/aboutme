import { Link } from "react-router";
import type { navItem, star, starData, setHoveredHook } from "~/types/types";
import styles from "./Main.module.css";
import navStarData from "~/data/navStar.json";

interface MainProps {
  hovered : star | null, 
  setHovered: setHoveredHook 
}

export default function Main ({ hovered, setHovered } : MainProps) {
  const typedStarData: starData[] = navStarData as starData[];

  return (
    <main className={styles.main}>
      {typedStarData.map((data) => {
        return (
          <Star 
            key={data.star}
            hovered={hovered} 
            setHovered={setHovered} 
            data={data}
            style={styles[data.star as keyof typeof styles]}
          />
        )
      })}
    </main>
  );
}

interface StarProps {
  hovered: star | null;
  setHovered: setHoveredHook;
  data: starData;
  style: CSSModuleClasses[string] ;
}

function Star ({ hovered, setHovered, data, style } : StarProps) {
  return (
    data.navItem !== null ? (
      <Link 
        className={`${styles.link} ${styles.star} ${style}`}
        onMouseEnter={() => setHovered(data.star)}
        onMouseLeave={() => setHovered(null)}
        to={`/${data.navItem}`}
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