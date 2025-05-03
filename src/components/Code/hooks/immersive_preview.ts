import { RefObject, useCallback, useEffect, useState } from 'react'

interface VideoLayout {
  width: number
  height: number
}

async function getVideoLayout( video:HTMLVideoElement ): Promise<VideoLayout> {
  let [ width, height ] = [ 0, 0 ]
  while( width === 0 ) {
    // Loading video resolution
    await new Promise( requestAnimationFrame )
    const { videoWidth, videoHeight } = video;
    [ width, height ] = [ videoWidth, videoHeight ]
  }
  return { width, height }
}

async function calcAspectRatio( video:HTMLVideoElement ): Promise<number> {
  const { width, height } = await getVideoLayout( video )
  return width / height
}

async function calcStandardPreviewWidth( preview:HTMLVideoElement, parentHeight:number ): Promise<number> {
  const previewAspectRatio: number = await calcAspectRatio( preview )
  return parentHeight * previewAspectRatio
}

export function useImmersivePreview( containerRef:RefObject<HTMLElement|null> ): boolean {

  const [ isImmersivePreview, setIsImmersivePreview ] = useState( false )
  const [ preview, setPreview ] = useState<HTMLVideoElement|null>( null )

  // Listening to preview playing
  useEffect( () => {
    const container: HTMLElement = containerRef.current!
    const observer = new MutationObserver( () => {
      const preview: HTMLVideoElement | null = container.querySelector( 'video' )
      setPreview( preview )
    } )
    observer.observe( container, { childList:true } )
    return () => observer.disconnect()
  }, [ containerRef ] )

  // Setting immersion mode based on preview dimentions
  const checkImmersionMode = useCallback( async( container:HTMLElement ) => {
    if( preview === null ) {
      setIsImmersivePreview( false )
      return
    }
    const { clientWidth, clientHeight } = container
    const standardPreviewWidth: number = await calcStandardPreviewWidth( preview, clientHeight )
    if( clientWidth <= ( standardPreviewWidth * 2.5 ) ) { setIsImmersivePreview( true ) }
    else { setIsImmersivePreview( false ) }
  }, [ preview ] )

  // Listening to layout changes to update immersion mode
  useEffect( () => {
    const container: HTMLElement = containerRef.current!
    const observer = new ResizeObserver( () => checkImmersionMode( container ) )
    observer.observe( container )
    return () => observer.disconnect()
  }, [ containerRef, checkImmersionMode ] )

  return isImmersivePreview

}
