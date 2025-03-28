export type navItem = "About Me" | "Education" | "Experience" | "Projects" | "Skills";
export type star = "denebola" | "theta" | "delta" | "regulus" | "eta" | "gamma" | "zeta" | "mu" | "epsilon";
export type setHoveredHook = React.Dispatch<React.SetStateAction<star | null>>;
export type setActiveHook = React.Dispatch<React.SetStateAction<navItem | null>>;
export type starRef = Record<star, HTMLDivElement | HTMLAnchorElement>;
export interface starData {
    star: star,
    navIndex: number | null,
    navItem: navItem | null
}
export interface navbarStarData {
    star: star,
    navIndex: number,
    navItem: navItem  
}
export interface starLine {
    head: star,
    tail: star
}