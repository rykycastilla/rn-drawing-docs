import { useDocsLocation } from '@/hooks/docs_location/docs_location'
import { useParams } from 'react-router-dom'

/**
 * @returns  undefined if the page isn't Docs, else: the selected topic (target)
 */
export function useSelectedDoc(): string | undefined {
  const { topic = '' } = useParams()
  const isInDocs = useDocsLocation()
  return isInDocs ? topic : undefined
}
