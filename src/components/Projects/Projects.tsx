import ProjectCard from "./ProjectCard"
import { projects } from "../../data/project"


export default function Projects(){
    return(
        <section className="projects-section" id="projects">
            <div className="container">
                <h2 className="section-heading">Projects</h2>
                <ul className="project-list">
                    {projects.map((project) => (
                        <li key={project.id} className="project-item">
                        <ProjectCard project={project} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}