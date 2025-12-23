export interface TeamMember {
  id: string
  name: string
  position: string
  photo: string
  managerId?: string | null
}

export interface Division {
  id: string
  name: string
  members: TeamMember[]
}