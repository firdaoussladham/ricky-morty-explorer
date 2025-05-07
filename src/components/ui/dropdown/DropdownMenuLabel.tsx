import { cn } from '@/lib/utils'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import React from 'react'

const Label = DropdownMenuPrimitive.Label
type LabelType = typeof Label

export const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<LabelType>,
  React.ComponentPropsWithoutRef<LabelType> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <Label
    ref={ref}
    className={cn('px-2 py-1.5 text-xs font-semibold', inset && 'pl-8', className)}
    {...props}
  />
))
DropdownMenuLabel.displayName = Label.displayName
