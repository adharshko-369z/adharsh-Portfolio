import type { Project } from "../types/index";

export const projects: Project[] =[
    {
        id: "applytrack",
        title: "ApplyTrack",
        description: "Built a responsive job application tracking dashboard using React and Firebase to organize and manage my job search process in one place.",
        tags: ["React", "JavaScript", "Firebase", "CSS", "React Router", "Vite"],
        repoUrl: "https://github.com/adharshko-369z/ApplyTrack",
        liveUrl: "https://applytrack-ko.netlify.app/",
        imageUrl: "/projects/applytrack.png",
        imageAlt:"ApplyTrack user interface",
        published: true
    },
    {
        id: "resume-builder",
        title: "Resume Builder",
        description: "Built a responsive Resume Builder using React and JavaScript to practice my frontend skills and build a useful web application.",
        tags: ["React", "JavaScript", "CSS", "Vite", "React PDF Renderer"],
        repoUrl: "https://github.com/adharshko-369z/Resume-Builder",
        liveUrl: "https://resume-builder-ko.netlify.app/",
        imageUrl: "/projects/resume-builder.png",
        imageAlt:"Resume Builder user interface",
        published: true
    }
]