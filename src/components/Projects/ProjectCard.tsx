import type { Project } from "../../types"

type ProjectCardProps ={
    project: Project
}

export default function ProjectCard({project}: ProjectCardProps){


    return(
        <article className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <img className="project-image" src={project.imageUrl} alt={project.imageAlt} loading="lazy"/>
            <p className="project-description">{project.description}</p>
            <ul className="project-tags" aria-label="Technologies used">
                {project.tags.map(tag=>{
                    return(
                        <li key={tag} className="project-tag">{tag}</li>
                    )
                })}
            </ul>
            <div className="project-links">
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    Repository
                </a>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo
                </a>
            </div>
        </article>
    )
}