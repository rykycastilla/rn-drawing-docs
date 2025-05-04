import { LegendContext } from './context'
import { useContext, useMemo } from 'react'

interface FootNote {
  numericalReference: number
  description: string
}

/**
 * Gets information about foot notes declared in this page
 */
export function useFootNote(): FootNote[] {
  const { legendIdList, legendIndex } = useContext( LegendContext )
  // Building foot notes in a structured format
  return useMemo( () => {
    const footNoteList: FootNote[] = []
    for( let i = 0; i < legendIdList.length; i++ ) {
      const id: string = legendIdList[ i ]!
      const description: string = legendIndex[ id ]!
      const footNote: FootNote = { numericalReference: i + 1, description }
      footNoteList.push( footNote )
    }
    return footNoteList
  }, [ legendIdList, legendIndex ] )
}
