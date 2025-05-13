import { NotFoundDocContext } from './context'
import { useContext } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Indicates that the current route is a "docs" child.
 * Only it will be ignored if you are rendering a page marked as "not found" by `useNotFound`
 */
export function useDocsLocation(): boolean {
  const contextResult: NotFoundDocContext | null = useContext( NotFoundDocContext )
  const { isNotFound = false } = contextResult ?? {}
  const { pathname } = useLocation()
  const isInDocs: boolean = pathname.startsWith( '/docs' )
  return isInDocs && !isNotFound
}
