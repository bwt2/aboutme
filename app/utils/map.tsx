import type { navItem, star } from "~/types/types";

export function navStarMap (navItem: navItem): star | null {
    switch (navItem) {
        case "About Me":
            return "regulus";
        default:
            return null; 
    }
}

export function starNavMap (star: star): navItem | null {
    switch (star) {
        case "regulus":
            return "About Me";
        default:
            return null;
    }
}

export function navIndex (navItem: navItem | null): string | null {
    switch (navItem) {
        case "About Me":
            return "01";
        default:
            return null; 
    }
}