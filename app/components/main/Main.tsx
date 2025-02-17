import { useRef, type RefObject } from "react";
import Star from "~/components/main/Star";
import ConstellationLine from "~/components/main/ConstellationLine";
import type { starRef, star, starData, setHoveredHook, starLine, navItem, setActiveHook } from "~/types/types";
import styles from "./Main.module.css";
import navStarData from "~/data/navStar.json";
import starLines from "~/data/starLines.json";

interface MainProps {
  hovered : star | null, 
  setHovered: setHoveredHook,
  active: navItem | null,
  setActive: setActiveHook
}

export default function Main ({ hovered, setHovered, active, setActive } : MainProps) {
  const typedStarData: starData[] = navStarData as starData[];
  const starLineData: starLine[] = starLines as starLine[];
  const starRefs = useRef<starRef>({} as starRef);

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
            refList={starRefs}
            active={active}
            setActive={setActive}
          />
        )
      })}
      <svg
        id="constellationViewBox"
        width="100%"
        height="100%"
        style={{ position: "relative", top: 0, left: 0, pointerEvents: "none" }}
      >
        {starLineData.map((data) => {
          return (
            starRefs.current[data.head] && starRefs.current[data.tail] &&
            <ConstellationLine
              key={`${data.head}->${data.tail}`}
              headElem={starRefs.current[data.head]}
              tailElem={starRefs.current[data.tail]}
            />
          )
        })}
      </svg>
    </main>
  );
}