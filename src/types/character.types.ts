import type { LucideIcon } from 'lucide-react'

export type Character = {
  id: number
  name: string
  status: 'Alive' | 'Dead' | 'unknown'
  species: string
  type: string
  gender: 'Male' | 'Female' | 'Genderless' | 'unknown'
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
  image: string
  episode: string[] // URLs
  url: string
  created: string // ISO date string
}

export type CharacterApiResponse = {
  info: {
    count: number
    pages: number
    next: string | null
    prev: string | null
  }
  results: Character[]
}

export interface CardActionItem {
  key: string
  label: string
  icon?: LucideIcon
  actionType?: ActionTypes
  onClick: () => void
  disabled?: boolean
  visible?: boolean
}

export type ActionTypes =
  | 'add'
  | 'edit'
  | 'delete'
  | 'print'
  | 'search'
  | 'reset'
  | 'filter'
  | 'favorite'
  | 'view'
