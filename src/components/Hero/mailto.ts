import { profile } from "../../data/profile"

export function mailtoFor(role: string): string {
  const subject = encodeURIComponent(`Opportunity: ${role}`)
  const body = encodeURIComponent(
    `Hi Adharsh,\n\n` +
    `I'm [your name] from [company]. We're hiring for a ${role} position, and I'd like to talk to you about it.\n\n` +
    `Role details or link: \n\n` +
    `Thanks,\n[your name]`
  )
  return `mailto:${profile.email}?subject=${subject}&body=${body}`
}