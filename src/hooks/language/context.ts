import { createContext } from 'react'
import { LanguageTools } from './LanguageTools'

export interface LanguageContext {
  tools: LanguageTools
  addPage( page:string ): void
  quitPage( page:string ): void
}

export const LanguageContext = createContext( null as unknown as LanguageContext )
