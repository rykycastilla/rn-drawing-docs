import { LanguageContext } from './context'
import { useContext, useEffect } from 'react'

/**
 * Add a page to current context to load its locales
 */
export function useLocalesOf( page:string ) {
  const { addPage, quitPage } = useContext( LanguageContext )
  useEffect( () => {
    addPage( page )
    return () => quitPage( page )
  }, [ addPage, quitPage, page ] )
}
