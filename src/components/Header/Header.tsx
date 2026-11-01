import type { JSX } from "react/jsx-runtime"
import { profile } from "../../data/profile"


export default function Header(): JSX.Element{

    return(
        <header className="header">
            <div className="logo">
                <span>{`< ${profile.name} >`}</span>
            </div>
            <nav className="nav">
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Skills</a>
                <a href="#">Contact</a>
                <a className="btnLink" href={profile.resumeUrl} download>Resume</a>
            </nav>
        </header>    
    )
}