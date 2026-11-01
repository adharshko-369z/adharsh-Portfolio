
type Status= "Open to work" | "Employed"

export interface Profile {
    name: string,
    email: string,
    resumeUrl: string,
    status: Status
    roles: string[]
}