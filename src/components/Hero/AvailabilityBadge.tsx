import { useState, useEffect, useRef } from "react"
import { profile } from "../../data/profile"
import { mailtoFor } from "./mailto"

export default function AvailabilityBadge(){

    const [isOpen, setIsOpen] = useState(false)
    const wrapperRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!isOpen) return

        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") setIsOpen(false)
        }

        function handlePointerDown(e: PointerEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
            setIsOpen(false)
            }
        }

        document.addEventListener("keydown", handleKeyDown)
        document.addEventListener("pointerdown", handlePointerDown)

        return () => {
            document.removeEventListener("keydown", handleKeyDown)
            document.removeEventListener("pointerdown", handlePointerDown)
        };
    }, [isOpen])

    function handleToggle(){
        setIsOpen(prev => !prev)
    }

    const roleList = profile.roles.map( role => {
        return(
            <li key={role}>
                <a href={mailtoFor(role)} target="_blank" rel="noopener noreferrer">{role}</a>
            </li>
        )
    } )

    return(
        <div className="availability" ref={wrapperRef}>
            <button 
                type="button"
                className="status-btn" 
                onClick={handleToggle}
                aria-expanded={isOpen}
                aria-controls="roles-list"
                > 
                <span className="status-dot" aria-hidden="true"/> 
                {profile.status} 
              <span className={`status-arrow ${isOpen? "open" : ""}`} aria-hidden="true">{"\u25BE"}</span>  
            </button>
            {isOpen && 
            <div className="status-card" id="roles-list">
                <p>Roles:</p>
                <ul>
                    {roleList}
                </ul>
            </div>}
        </div>
    )
}