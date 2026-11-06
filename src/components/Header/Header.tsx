import type { JSX } from "react/jsx-runtime"
import { profile } from "../../data/profile"


export default function Header(): JSX.Element{

    return(
        <header className="header">
            <div className="header-row container">
                <div className="logo">
                    <span>{`< ${profile.name} >`}</span>
                </div>
                <nav className="nav">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contact</a>
                    <a className="btnLink" href={profile.resumeUrl} download>Resume</a>
                </nav>  
            </div>
        </header>    
    )
}