import { useCallback, useEffect, RefObject, useState } from 'react'

interface UseFullScreenResult {
  isFullScreen: boolean
  toggleFullScreen(): void
}

export function useFullScreen( maximizable:boolean, ref:RefObject<HTMLElement|null> ): UseFullScreenResult {

  const [ isFullScreen, setIsFullScreen ] = useState( false )

  const toggleFullScreen = useCallback( () => {
    const element: HTMLElement | null = ref.current
    if( isFullScreen ) {
      document.exitFullscreen()
    }
    else if( element !== null ) {
      element.requestFullscreen()
    }
  }, [ ref, isFullScreen ] )

  const updateFullScreenState = useCallback( () => {
    const element: HTMLElement | null = ref.current
    if( element === null ) {
      setIsFullScreen( false )
    }
    else {
      setIsFullScreen( element === document.fullscreenElement )
    }
  }, [ ref ] )

  // Automatically state updating (to handle browser fullscreen handlers such as 'Esc')
  useEffect( () => {
    if( !maximizable ) { return }
    const fullScreenUpdaterInterval = setInterval( updateFullScreenState, 250 )
    return () => clearInterval( fullScreenUpdaterInterval )
  }, [ maximizable, updateFullScreenState ] )

  return { isFullScreen, toggleFullScreen }
}
