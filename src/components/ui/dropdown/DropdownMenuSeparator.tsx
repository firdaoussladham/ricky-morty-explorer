import { cn } from '@/lib/utils'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import React from 'react'

const Separator = DropdownMenuPrimitive.Separator
type SeparatorType = typeof Separator

export const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<SeparatorType>,
  React.ComponentPropsWithoutRef<SeparatorType>
>(({ className, ...props }, ref) => (
  <Separator
    ref={ref}
    className={cn('bg-muted -mx-1 my-1 h-px', className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = Separator.displayName
