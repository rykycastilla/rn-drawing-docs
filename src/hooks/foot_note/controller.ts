import { LegendContext } from './context'
import { useCallback, useContext } from 'react'

interface Controller {
  set( description:string ): void
  del(): void
}

/**
 * Creates usefull callbacks to handle foot notes in the context database
 */
export function useController( id:string ): Controller {

  const { setLegendIdList, setLegendIndex } = useContext( LegendContext )

  // Creates and updates description content for a foot note
  const set = useCallback( ( description:string ) => {
    setLegendIdList( ( legendIdList:string[] ) => {
      // Creating if it doesn't exist
      const doesntExist: boolean = legendIdList.indexOf( id ) === -1
      if( doesntExist ) { legendIdList.push( id ) }
      return [ ...legendIdList ]
    } )
    setLegendIndex( ( legendIndex:Record<string,string> ) => {
      legendIndex[ id ] = description
      return { ...legendIndex }
    } )
  }, [ id, setLegendIdList, setLegendIndex ] )

  // Deletes the content of a foot note
  const del = useCallback( () => {
    // Deleting id
    setLegendIdList( ( legendIdList:string[] ) => {
      const index: number = legendIdList.indexOf( id )
      legendIdList.splice( index, 1 )
      return [ ...legendIdList ]
    } )
    // Deleting description
    setLegendIndex( ( legendIndex:Record<string,string> ) => {
      delete legendIndex[ id ]
      return { ...legendIndex }
    } )
  }, [ id, setLegendIdList, setLegendIndex ] )

  return { set, del }

}
