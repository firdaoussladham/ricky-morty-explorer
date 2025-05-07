import { cn } from '@/lib/utils'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { Check } from 'lucide-react'
import React from 'react'

const CheckboxItem = DropdownMenuPrimitive.CheckboxItem
const ItemIndicator = DropdownMenuPrimitive.ItemIndicator
type CheckboxItemType = typeof CheckboxItem

export const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<CheckboxItemType>,
  React.ComponentPropsWithoutRef<CheckboxItemType>
>(({ className, children, checked, ...props }, ref) => (
  <CheckboxItem
    ref={ref}
    className={cn(
      'focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-xs transition-colors outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ItemIndicator>
        <Check className="h-4 w-4" />
      </ItemIndicator>
    </span>
    {children}
  </CheckboxItem>
))
DropdownMenuCheckboxItem.displayName = CheckboxItem.displayName
