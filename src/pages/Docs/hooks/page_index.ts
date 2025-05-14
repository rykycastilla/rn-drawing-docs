import { Page, pages } from '../models'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'

/**
 * Gets the index of the current doc page
 */
export function usePageIndex(): number {
  const { topic } = useParams()
  const index = useMemo( (): number | undefined => {
    let index: number | undefined
    if( topic === undefined ) { return }
    for( let i = 0; i < pages.length; i++ ) {
      const page: Page = pages[ i ]!
      if( page.target === topic ) {
        index = i
        break
      }
    }
    return index
  }, [ topic ] )
  return index ?? -1
}
