import { cn } from '@/lib/utils'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { ChevronRight } from 'lucide-react'
import React from 'react'

const SubTrigger = DropdownMenuPrimitive.SubTrigger
type SubTriggerType = typeof SubTrigger

export const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<SubTriggerType>,
  React.ComponentPropsWithoutRef<SubTriggerType> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <SubTrigger
    ref={ref}
    className={cn(
      'focus:bg-accent data-[state=open]:bg-accent flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-xs outline-none select-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
      inset && 'pl-8',
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto" />
  </SubTrigger>
))
DropdownMenuSubTrigger.displayName = SubTrigger.displayName
