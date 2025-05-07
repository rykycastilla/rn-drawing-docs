import { useLocation } from 'react-router-dom'

export function useDocsLocation(): boolean {
  const { pathname } = useLocation()
  return pathname.startsWith( '/docs' )
}
