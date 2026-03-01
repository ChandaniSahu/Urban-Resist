export interface Hazard {
  id: string
  title: string
  description: string
  lat: number
  lng: number
  image?: string
  createdAt: string
}

export const hazards: Hazard[] = []