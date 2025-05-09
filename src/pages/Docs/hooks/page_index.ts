import { data } from '../data'
import { PageStructure } from '../models'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'

/**
 * Gets the index of the current doc page on data array
 */
export function usePageIndex(): number {
  const { topic } = useParams()
  const index = useMemo( (): number | undefined => {
    let index: number | undefined
    if( topic === undefined ) { return }
    for( let i = 0; i < data.length; i++ ) {
      const page: PageStructure = data[ i ]!
      if( page.target === topic ) {
        index = i
        break
      }
    }
    return index
  }, [ topic ] )
  return index ?? -1
}
