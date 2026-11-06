
type Status= "Open to work" | "Employed"

export interface Profile {
    name: string,
    email: string,
    resumeUrl: string,
    status: Status,
    roles: string[],
    headline: string,
    intro: string,
    aboutMe: string[],
    socialLinks: SocialLink[]
}

export interface Project {
    id: string,
    title: string,
    description: string,
    tags: string[],
    repoUrl: string,
    liveUrl: string,
    imageUrl: string,
    imageAlt: string,
    published: boolean,
}

export interface SkillGroup {
    id: string,
    label: string,
    skillsList: string[]
}

export interface SocialLink {
    label: string,
    url: string
}