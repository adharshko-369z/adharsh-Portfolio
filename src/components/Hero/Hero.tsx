import AvailabilityBadge from "./AvailabilityBadge";
import HighlightedText from "./HighlightedText";
import { profile } from "../../data/profile";

export default function Hero(){

    return(
        <section id="home" className="hero-section">
            <div className="hero-details container">        
                <AvailabilityBadge />
                <h1 className="headline"><HighlightedText text={profile.headline} /></h1>
                <p className="hero-intro">{profile.intro}</p>
                <div className="hero-actions">
                    <a href="#projects" className="btn btn-primary">See my projects</a>
                    <a href="#contact" className="btn btn-secondary">Get in touch</a>
                </div>
            </div>
        </section>
    )
    
}