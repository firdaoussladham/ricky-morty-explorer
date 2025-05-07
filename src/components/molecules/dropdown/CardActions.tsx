import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import type { CardActionItem } from '@/types/character.types'
import { EllipsisVertical } from 'lucide-react'
import React from 'react'
import { getIconForActionType } from './helper'

interface CardActionsProps {
  items: CardActionItem[]
}

const CardActions: React.FC<CardActionsProps> = ({ items }) => {
  const visibleItems = items.filter((item) => item.visible)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          'rounded p-1 transition-colors hover:bg-transparent',
          'focus:ring-0 focus:ring-transparent focus:outline-none',
          visibleItems.length === 0 && 'cursor-not-allowed opacity-50',
        )}
      >
        <EllipsisVertical className="text-primary h-3 w-3 group-hover:cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {visibleItems.map((item) => {
          const fallbackIcon = item.icon ?? undefined
          const config = item.actionType ? getIconForActionType(item.actionType) : null
          const Icon = config?.icon ?? fallbackIcon
          const colorClass = config?.colorClass ?? ''
          return (
            <DropdownMenuItem
              key={item.key}
              onClick={item.onClick}
              disabled={item.disabled}
            >
              {Icon && <Icon className={cn('h-2 w-2 stroke-[1.1]', colorClass)} />}
              <span className={cn('font-normal')}>{item.label}</span>
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default CardActions
