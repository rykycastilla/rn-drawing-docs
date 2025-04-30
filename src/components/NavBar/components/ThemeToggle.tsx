import { Button } from '@/libs/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/libs/ui/dropdown-menu'
import { MoonIcon, SunIcon } from 'lucide-react'
import { ReactElement, useEffect, useState } from 'react'
import { useTheme } from '@/libs/ui/hooks/theme'

const ThemeToggle = (): ReactElement => {

  const { setTheme } = useTheme()
  const [ mounted, setMounted ] = useState( false )

  // Ensure component is mounted to avoid hydration mismatch
  useEffect( () => {
    setMounted( true )
  }, [] )

  if( !mounted ) {
    return (
      <Button variant="outline" size="icon">
        <SunIcon className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="bg-background">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" onClick={ ( event ) => event.stopPropagation() }>
        <DropdownMenuItem onClick={ () => setTheme( 'light' ) }>
          Claro
        </DropdownMenuItem>
        <DropdownMenuItem onClick={ () => setTheme( 'dark' ) }>
          Oscuro
        </DropdownMenuItem>
        <DropdownMenuItem onClick={ () => setTheme( 'system' ) }>
          Sistema
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )

}

export default ThemeToggle
