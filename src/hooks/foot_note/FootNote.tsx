import { ReactElement, useEffect, useId } from 'react'
import { useController } from './controller'
import { useIndex } from './_index'

interface FootNoteProps {
  children: string
}

const FootNote = ( props:FootNoteProps ): ReactElement => {

  const { children } = props
  const id = useId()
  const index = useIndex( id )  // Extracting specific index, to represent numerical reference
  const { set, del } = useController( id )

  // Creating and updating description
  useEffect( () => {
    set( children )
  }, [ children, set ] )

  // Deleting description when its is not necessary
  useEffect( () => {
    return () => { del() }
  }, [ del ] )

  return <sup>{ index + 1 }</sup>

}

export default FootNote
