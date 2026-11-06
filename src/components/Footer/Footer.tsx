import { profile } from "../../data/profile"

export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer-details container">
                <p>{profile.name}</p>
                <p>Built with React + TypeScript</p>
            </div>
        </footer>
    )
}