import { cn } from '@/lib/utils'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { Circle } from 'lucide-react'
import React from 'react'

const ItemIndicator = DropdownMenuPrimitive.ItemIndicator
const RadioItem = DropdownMenuPrimitive.RadioItem
type RadioItemType = typeof RadioItem

export const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<RadioItemType>,
  React.ComponentPropsWithoutRef<RadioItemType>
>(({ className, children, ...props }, ref) => (
  <RadioItem
    ref={ref}
    className={cn(
      'focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-xs transition-colors outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </ItemIndicator>
    </span>
    {children}
  </RadioItem>
))
DropdownMenuRadioItem.displayName = RadioItem.displayName
