import { createContext } from 'react'
import { Theme, ThemeConfig } from './Theme'

export interface ThemeContext {
  resolvedTheme: Theme
  theme: ThemeConfig
  setTheme( theme:ThemeConfig ): void
}

export const ThemeContext = createContext( null as unknown as ThemeContext )
