import { SidebarMenu, SidebarMenuButton } from '@/components/ui/sidebar'

export function LogoSidebar() {
  return (
    <SidebarMenu>
      <SidebarMenuButton
        size="lg"
        className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
      >
        <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
          <img
            src="https://i.pinimg.com/736x/51/eb/81/51eb81620dfef7978cad0f817fefd427.jpg"
            alt="Rick and Morty Logo"
            className="h-8 w-auto rounded-md"
          />
        </div>

        <div className="grid flex-1 text-left text-xs leading-tight">
          <span className="truncate font-medium">Rick & Morty Explorer</span>
          <span className="truncate text-xs">v1.0.0 – Portal Release</span>
        </div>
      </SidebarMenuButton>
    </SidebarMenu>
  )
}
