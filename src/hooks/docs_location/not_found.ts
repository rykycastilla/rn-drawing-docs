import { NotFoundDocContext } from './context'
import { useContext, useEffect } from 'react'

/**
 * Using to indicates to `useDocsLocation` that the route rendering the parent component
 * is a "not found page" instead of a regular "docs"
 */
export function useNotFound() {
  const { setIsNotFound } = useContext( NotFoundDocContext )!
  useEffect( () => {
    setIsNotFound( true )
    return () => setIsNotFound( false )
  }, [ setIsNotFound ] )
}
