import { Page, pages } from '../models'
import { useMemo } from 'react'

/**
 * Gets a doc page based on its index on pages array
 */
export function usePage( index:number ): Page | undefined {
  return useMemo( () => {
    return pages[ index ]
  }, [ index ] )
}
