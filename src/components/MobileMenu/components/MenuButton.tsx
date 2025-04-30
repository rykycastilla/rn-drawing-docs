import { Button } from '@/libs/ui/button'
import { Menu } from 'lucide-react'
import { ReactElement } from 'react'

interface MenuButtonProps {
  open(): void
}

const MenuButton = ( props:MenuButtonProps ): ReactElement => {
  const { open } = props
  return (
    <Button variant="ghost" size="icon" onClick={ open } data-mobile-menu-trigger>
      <Menu className="h-5 w-5" />
      <span className="sr-only">Abrir menú</span>
    </Button>
  )
}

export default MenuButton
