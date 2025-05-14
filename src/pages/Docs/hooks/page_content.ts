import { Component, Page } from '../models'
import { useCallback, useEffect, useState } from 'react'

export function usePageContent( page:Page ): Component[] {

  const [ content, setContent ] = useState<Component[]>( [] )

  // Setting page content (if it is not aborted)
  const loadPageContent = useCallback( async( isAborted:{ value:boolean } ) => {
    const content: Component[] = await page.getContent()
    if( isAborted.value ) { return }
    setContent( content )
  }, [ page ] )

  // Loading content (aborting when finishes to avoid race condition)
  useEffect( () => {
    const isAborted = { value:false }
    loadPageContent( isAborted )  // Requesting
    // Aborting
    return () => { isAborted.value = true }
  }, [ loadPageContent ] )

  return content

}
