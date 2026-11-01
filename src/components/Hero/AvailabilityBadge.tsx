import { profile } from "../../data/profile"
import { useState } from "react"

export default function AvailabilityBadge(){

    const [isOpen, setIsOpen] = useState(false)

    function handleToggle(){
        setIsOpen(prev => !prev)
    }

    const roleList = profile.roles.map( role => {
        return(
            <li key={role}>{role}</li>
        )
    } )

    return(
        <div className="availability">
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