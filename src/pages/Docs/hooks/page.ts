import { data } from '../data'
import { PageStructure } from '../models'
import { useMemo } from 'react'

/**
 * Gets a doc page based on its index on data array
 */
export function usePage( index:number ): PageStructure | undefined {
  return useMemo( () => {
    return data[ index ]
  }, [ index ] )
}
