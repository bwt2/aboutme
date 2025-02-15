import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    route("", "routes/home/Home.tsx", [
        route("about me", "routes/about-me/AboutMe.tsx"),
        route("education", "routes/education/Education.tsx"),
        route("experience", "routes/experience/Experience.tsx"),
        route("projects", "routes/projects/Projects.tsx"),
        route("skills", "routes/skills/Skills.tsx")
    ])
] satisfies RouteConfig;