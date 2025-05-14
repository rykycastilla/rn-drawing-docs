import { LanguageContext } from './context'
import { LanguageTools } from './LanguageTools'
import { useContext } from 'react'

export function useLanguage(): LanguageTools {
  const { tools } =  useContext( LanguageContext )
  return tools
}
