import { useState, useEffect, useRef } from 'react';

type coordinates = {
  x1: number,
  y1: number,
  x2: number,
  y2: number
}

export default function ConstellationLine (
  {headElem, tailElem, introElem} : {
    headElem: HTMLDivElement | HTMLAnchorElement, 
    tailElem: HTMLDivElement | HTMLAnchorElement,
    introElem: HTMLDivElement,
  }
) {
    const [coords, setCoords] = useState<coordinates>({ x1: 0, y1: 0, x2: 0, y2: 0 });
    const randomTimer = useRef(Math.floor(Math.random()*10)+5);
    
    useEffect(() => {
      if (!headElem || !tailElem) return;
  
      const updateCoords = () => {
        if (!headElem || !tailElem) return;
  
        const headRect: DOMRect = headElem.getBoundingClientRect();
        const tailRect: DOMRect = tailElem.getBoundingClientRect();
        const introRect: DOMRect = introElem.getBoundingClientRect();

        setCoords({
          x1: headRect.left + headRect.width / 2,
          y1: headRect.top + headRect.height / 2 - introRect.bottom ,
          x2: tailRect.left + tailRect.width / 2,
          y2: tailRect.top + tailRect.height / 2 - introRect.bottom,
        });
      };
  
      updateCoords();

      window.addEventListener("resize", updateCoords);
      return () => window.removeEventListener("resize", updateCoords);
    }, [headElem, tailElem]);
  
    return (
      <svg 
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <line 
        x1={coords.x1}
        y1={coords.y1}
        x2={coords.x2}
        y2={coords.y2}
        stroke="white" 
        strokeWidth="4"
        opacity="0.25"
      >
        <animate
          attributeName="opacity"
          values="0;0.25;0"
          dur={`${randomTimer.current}s`}
          repeatCount="indefinite" 
        />
      </line>
    </svg>
    )
}