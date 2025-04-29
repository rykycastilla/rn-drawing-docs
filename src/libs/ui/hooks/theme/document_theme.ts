import { Theme } from './Theme'
import { useEffect } from 'react'

/**
 * Sets an specific theme in the documentwhen its state is updated
 */
export function useDocumentTheme( theme:Theme ) {
  useEffect( () => {
    const html: HTMLElement = document.body.parentElement!
    const otherTheme: Theme = ( theme === 'light' ) ? 'dark' : 'light'
    // Setting class theme
    html.classList.remove( otherTheme )
    html.classList.add( theme )
    // Setting theme style
    html.style.colorScheme = theme
  }, [ theme ] )
}
