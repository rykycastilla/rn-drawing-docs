import { LegendContext } from './context'
import { useContext, useEffect, useState } from 'react'

/**
 * Find the index for a foot note based on its id
 */
export function useIndex( id:string ): number {

  const [ index, setIndex ] = useState( -1 )
  const { legendIdList } = useContext( LegendContext )

  useEffect( () => {
    const index: number = legendIdList.indexOf( id )
    setIndex( index )
  }, [ legendIdList, id ] )

  return index

}
