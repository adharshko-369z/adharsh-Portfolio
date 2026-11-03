import { profile } from "../../data/profile"

export default function About(){

    const aboutPara = profile.aboutMe.map(para =>{
        return(
            <p key={para} className="about-paragraph">{para}</p>
        )
    })

    return(
        <section className="about-section" id="about">
            <div className="about-details container">
                <h2 className="section-heading" >About</h2>
                {aboutPara}
            </div>
        </section>
    )
}