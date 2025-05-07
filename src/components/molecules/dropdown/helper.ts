import type { ActionTypes } from '@/types/character.types'
import {
  CirclePlus,
  Eye,
  type LucideIcon,
  Printer,
  RotateCcw,
  Search,
  SlidersHorizontal,
  SquarePen,
  Star,
  Trash2,
} from 'lucide-react'

type IconConfig = {
  icon: LucideIcon
  colorClass: string
}

const iconMap: Record<ActionTypes, IconConfig> = {
  add: {
    icon: CirclePlus,
    colorClass: 'text-success', // green
  },
  edit: {
    icon: SquarePen,
    colorClass: 'text-warning', // yellow
  },
  delete: {
    icon: Trash2,
    colorClass: 'text-destructive', // red
  },
  print: {
    icon: Printer,
    colorClass: 'text-muted-foreground', // neutral
  },
  search: {
    icon: Search,
    colorClass: 'text-muted-foreground', // neutral
  },
  reset: {
    icon: RotateCcw,
    colorClass: 'text-muted-foreground', // neutral
  },
  filter: {
    icon: SlidersHorizontal,
    colorClass: 'text-muted-foreground', // neutral
  },
  view: {
    icon: Eye,
    colorClass: 'text-blue-500',
  },
  favorite: {
    icon: Star,
    colorClass: 'text-yellow-500',
  },
}

export const getIconForActionType = (actionType: ActionTypes): IconConfig => {
  return iconMap[actionType]
}
