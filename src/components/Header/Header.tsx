import { profile } from "../../data/profile"
import { useActiveSection } from "../../hooks/useActiveSection"

const navLinks = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
]

const sectionIds = navLinks.map((link) => link.id)

export default function Header(){

    const activeId = useActiveSection(sectionIds)

    return(
        <header className="header">
            <div className="header-row container">
                <div className="logo">
                    <span>{`< ${profile.name} >`}</span>
                </div>
                <nav className="nav">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            aria-current={activeId === link.id ? "location" : undefined}
                        >
                            {link.label}
                        </a>
                    ))}
                        <a className="btnLink" href={profile.resumeUrl} download>Resume</a>
                </nav>  
            </div>
        </header>    
    )
}

 