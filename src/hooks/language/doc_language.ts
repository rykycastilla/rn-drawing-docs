import { useEffect } from 'react'

/**
 * Updates html language to improve browser services
 */
export function useDocLanguage( language:string ) {
  useEffect( () => {
    document.documentElement.lang = language
  }, [ language ] )
}
