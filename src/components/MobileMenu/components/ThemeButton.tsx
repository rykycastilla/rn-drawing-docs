import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/libs/ui/dropdown-menu'
import { Monitor, MoonIcon, SunIcon } from 'lucide-react'
import { ThemeConfig, useTheme } from '@/libs/ui/hooks/theme'
import { ReactElement, useCallback } from 'react'

interface ThemeButtonProps {
  close(): void
}

const ThemeButton = ( props:ThemeButtonProps ): ReactElement => {

  const { close } = props
  const { theme, resolvedTheme, setTheme } = useTheme()

  const changeTheme = useCallback( ( theme:ThemeConfig ) => {
    setTheme( theme )
    close()
  }, [ close, setTheme ] )

  const getThemeIcon = () => {
    if ( theme === 'system' ) return <Monitor className="h-5 w-5" />
    return resolvedTheme === 'dark' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />
  }

  const getThemeName = () => {
    if ( theme === 'system' ) return 'Sistema'
    return resolvedTheme === 'dark' ? 'Oscuro' : 'Claro'
  }

  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 w-full text-left">
            {getThemeIcon()}
            <span className="font-medium">Tema ({getThemeName()})</span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-[150px]">
          <DropdownMenuItem
            onClick={ () => changeTheme( 'light' ) }
            className="flex items-center gap-2">
            <SunIcon className="h-4 w-4" />
            <span>Claro</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={ () => changeTheme( 'dark' ) }
            className="flex items-center gap-2">
            <MoonIcon className="h-4 w-4" />
            <span>Oscuro</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={ () => changeTheme( 'system' ) }
            className="flex items-center gap-2">
            <Monitor className="h-4 w-4" />
            <span>Sistema</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )

}

export default ThemeButton
