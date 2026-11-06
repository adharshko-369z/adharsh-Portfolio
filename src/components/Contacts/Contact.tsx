import { useState } from "react"
import { profile } from "../../data/profile"

export default function Contact(){

    const [copied, setCopied] = useState(false)

    async function copyEmail(){
        try{
            await navigator.clipboard.writeText(profile.email)
            setCopied(true)
            setTimeout(()=>setCopied(false),2000)
        }catch{
             // clipboard blocked: the email is still visible to select by hand
        }
    }

    return(
        <section className="contact-section" id="contact">
            <div className="contact-details container">
                <div className="contact-intro">
                    <h2 className="contact-headline">Hiring a frontend developer? Let's talk.</h2>
                    <p className="contact-response">I reply within a day. A short note about the role and your stack is enough.</p>
                </div>
                <div className="contact-actions">
                    <div className="contact-email-actions">
                        <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
                        <button type="button" className="btn btn-primary" onClick={copyEmail} aria-live="polite" >
                            {copied? "Copied" : "Copy email"}
                        </button>
                    </div>
                    <ul className="contact-links">
                        {profile.socialLinks.map((link) => {
                            return(
                                <li key={link.label}>
                                <a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}