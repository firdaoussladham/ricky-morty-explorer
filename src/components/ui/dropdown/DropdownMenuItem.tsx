import { cn } from '@/lib/utils'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import React from 'react'

const { Item } = DropdownMenuPrimitive
type ItemType = typeof Item

const styles = {
  layout: 'relative flex items-center gap-2 px-2 py-1.5 rounded-sm select-none text-xs',
  text: 'text-secondary font-normal',
  state: 'cursor-default outline-none transition-colors',
  hover: 'hover:bg-sidebar hover:text-accent-foreground hover:cursor-pointer',
  disabled: 'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
  inset: 'pl-8',
  svg: '[&>svg]:shrink-0',
}

export const DropdownMenuItem = React.forwardRef<
  React.ElementRef<ItemType>,
  React.ComponentPropsWithoutRef<ItemType> & {
    inset?: boolean
  }
>((props, ref) => {
  const { className, inset, ...rest } = props

  return (
    <Item
      ref={ref}
      className={cn(
        styles.layout,
        styles.text,
        styles.state,
        styles.hover,
        styles.disabled,
        styles.svg,
        inset && styles.inset,
        className,
      )}
      {...rest}
    />
  )
})

DropdownMenuItem.displayName = Item.displayName
