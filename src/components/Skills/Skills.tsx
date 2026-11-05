import { skills } from "../../data/skill"

export default function Skills(){
    return(
        <section className="skills-section" id="skills">
            <div className="container">
                <h2 className="section-heading">Skills</h2>
                <dl className="skill-list">
                    {skills.map((group) => (
                        <div key={group.id} className="skill-group">
                        <dt className="skill-label">{group.label}</dt>
                        <dd className="skill-items">{group.skillsList.join(", ")}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    )
}