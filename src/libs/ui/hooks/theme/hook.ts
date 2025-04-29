import { ThemeContext } from './context'
import { useContext } from 'react'

export function useTheme(): ThemeContext {
  return useContext( ThemeContext )
}
