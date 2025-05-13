import { NotFoundDocContext } from './context'
import { useContext } from 'react'
import { useLocation } from 'react-router-dom'

export function useDocsLocation(): boolean {
  const contextResult: NotFoundDocContext | null = useContext( NotFoundDocContext )
  const { isNotFound = false } = contextResult ?? {}
  const { pathname } = useLocation()
  const isInDocs: boolean = pathname.startsWith( '/docs' )
  return isInDocs && !isNotFound
}
