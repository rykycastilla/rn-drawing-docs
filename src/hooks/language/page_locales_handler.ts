import { useCallback, useEffect, useState } from 'react'

interface PageLocalesHandler {
  pageLocales: Set<string>
  addPage( page:string ): void
  quitPage( page:string ): void
}

export function usePageLocalesHandler(): PageLocalesHandler {

  const [ pageLocales, setPageLocales ] = useState( new Set<string>() )

  // Incluiding root by default
  useEffect( () => {
    pageLocales.add( 'root' )
  }, [ pageLocales ] )

  const addPage = useCallback( ( page:string ) => {
    setPageLocales( ( pageLocales:Set<string> ) => {
      pageLocales.add( page )
      return new Set<string>( pageLocales )
    } )
  }, [] )

  const quitPage = useCallback( ( page:string ) => {
    setPageLocales( ( pageLocales:Set<string> ) => {
      pageLocales.delete( page )
      return new Set<string>( pageLocales )
    } )
  }, [] )

  return { pageLocales, addPage, quitPage }

}
