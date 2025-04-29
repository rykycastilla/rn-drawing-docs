import { ReactElement } from 'react'
import { Theme, ThemeConfig } from './Theme'
import { ThemeContext } from './context'
import { useDarkSystem } from './dark_system'
import { useDocumentTheme } from './document_theme'
import { useStorageState } from '@/libs/ui/hooks/storage_state'

interface ThemeProviderProps {
  children?: ReactElement[] | ReactElement
}

const ThemeProvider = ( props:ThemeProviderProps ): ReactElement => {

  const { children } = props
  const [ theme, setTheme ] = useStorageState<ThemeConfig>( 'system', 'theme-config' )
  // Resolving system config
  const systemIsDark = useDarkSystem()
  const systemTheme: Theme = systemIsDark ? 'dark' : 'light'
  // Choosing theme
  const resolvedTheme: Theme = ( theme === 'system' ) ? systemTheme : theme
  useDocumentTheme( resolvedTheme )  // Setting theme in the document
  const contextValue: ThemeContext = { resolvedTheme, theme, setTheme }

  return (
    <ThemeContext.Provider value={ contextValue }>
      { children }
    </ThemeContext.Provider>
  )

}

export default ThemeProvider
