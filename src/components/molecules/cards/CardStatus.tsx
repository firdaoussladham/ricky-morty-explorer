import { cn } from '@/lib/utils'
import type { LucideIcon } from 'lucide-react'
import React from 'react'

type CardStatusProps = {
  title: string
  value: string
  icon: LucideIcon
}

const CardStatus: React.FC<CardStatusProps> = ({ title, value, icon: Icon }) => {
  return (
    <div className="flex items-center my-2">
      {Icon && <Icon className={cn('h-3 w-3 stroke-[1.1]')} />}
      <h4 className="ml-2 font-normal text-gray-500">{title} :</h4>
      <p className="ml-auto">{value}</p>
    </div>
  )
}

export default CardStatus
