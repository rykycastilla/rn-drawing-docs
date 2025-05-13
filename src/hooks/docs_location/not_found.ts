import { NotFoundDocContext } from './context'
import { useContext, useEffect } from 'react'

export function useNotFound() {
  const { setIsNotFound } = useContext( NotFoundDocContext )!
  useEffect( () => {
    setIsNotFound( true )
    return () => setIsNotFound( false )
  }, [ setIsNotFound ] )
}
