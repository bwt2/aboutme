import type { navItem, star } from "~/types/types";
import styles from "./Main.module.css";
import { starNavMap, navIndex } from "~/utils/map";

type setHoveredHook = React.Dispatch<React.SetStateAction<star | null>>;

export default function Main ( { hovered, setHovered } : { hovered : star | null, setHovered: setHoveredHook }) {
  const stars: star[] = [
    "denebola",
    "theta",
    "delta",
    "regulus",
    "eta",
    "gamma",
    "zeta",
    "mu",
    "epsilon" 
  ];

  return (
    <main className={styles.main}>
      {stars.map((star) => {
        return (
          <Star 
            key={star}
            hovered={hovered} 
            setHovered={setHovered} 
            star={star}
            style={styles[star as keyof typeof styles]}
          />
        )
      })}
    </main>
  );
}

function Star (
  { hovered, setHovered, star, style } : { hovered: star | null, setHovered: setHoveredHook, star: star, style: CSSModuleClasses[string] }
) {
  const navItem: navItem | null = starNavMap(star);
  return (
    <div 
      className={`${styles.star} ${style}`}
      onMouseEnter={() => setHovered(star)}
      onMouseLeave={() => setHovered(null)}
    >
      {navItem &&
        <div className={styles.starAnnotation}>
          <h1>{navIndex(navItem)}</h1>
          <p>{navItem}</p>
        </div>
      }
      { hovered === star ? <div className={styles.starDecor}/> : ''}
    </div>
  )
}