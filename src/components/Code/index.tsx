import CommandButton from './components/CommandButton'
import Maximize from './components/Maximize'
import Preview from './components/Preview'
import SyntaxHighlighter from './components/SyntaxHighlighter'
import { ReactElement, useCallback, useState, useRef } from 'react'
import { useFullScreen } from './hooks/full_screen'
import { useImmersivePreview } from './hooks/immersive_preview'

interface CodeProps {
  children: string
  language: string
  fileName: string
  preview?: string
  maximizable?: boolean
}

const Code = ( props:CodeProps ): ReactElement => {

  const { children, language, fileName, preview, maximizable = false } = props
  const [ isPlaying, setIsPlaying ] = useState( false )
  const previewRef = useRef<HTMLVideoElement>( null )
  const codeBlockRef = useRef<HTMLDivElement>( null )
  const { isFullScreen, toggleFullScreen } = useFullScreen( maximizable, codeBlockRef )
  const thereIsPreview: boolean = preview !== undefined
  const containerRef = useRef<HTMLDivElement|null>( null )
  const isImmersive = useImmersivePreview( containerRef )

  const togglePlay = useCallback( () => {
    const preview: HTMLVideoElement | null = previewRef.current
    if( isPlaying ) {
      if ( preview ) {
        preview.pause()
        preview.currentTime = 0
      }
      setIsPlaying( false )
    }
    else {
      if( preview ) { preview.play() }
      setIsPlaying( true )
    }
  }, [ previewRef, isPlaying ] )

  return (
    <div
      ref={ codeBlockRef }
      className={ `my-6 rounded-lg overflow-hidden border border-gray-700 relative transition-all duration-300 ${
        isFullScreen ? 'fixed top-0 left-0 right-0 bottom-0 z-50 m-0 rounded-none flex flex-col' : 'relative z-10'
      }` }>
      <div
        className="bg-gray-800 px-4 py-2 text-sm text-gray-300 font-mono border-b border-gray-700 flex justify-between items-cente">
        <div>{ fileName }</div>
        <div className="flex items-center gap-2 ml-auto">
          { maximizable && <Maximize isFullScreen={ isFullScreen } toggleFullScreen={ toggleFullScreen } /> }
          { preview && <CommandButton disabled={ !preview } isPlaying={ isPlaying } togglePlay={ togglePlay } /> }
        </div>
      </div>
      <div
        ref={ containerRef }
        className={
          `relative bg-[#1a2035] flex flex-1 overflow-auto
          ${ ( thereIsPreview && !isFullScreen ) ? 'h-[450px]' : '' }
          ${ isImmersive ? 'justify-center items-center' : 'flex-row' }
          ${ ( !isFullScreen ) ? 'max-h-[450px]' : '' }`
        }>
        {
          // Hiding syntax only under these conditions
          !( isImmersive ) &&
          <SyntaxHighlighter language={ language } isFullScreen={ isFullScreen } thereIsPreview={ thereIsPreview }>
            { children }
          </SyntaxHighlighter>
        }
        { ( thereIsPreview && isPlaying ) && <Preview ref={ previewRef } isImmersive={ isImmersive } preview={ preview! } /> }
      </div>
    </div>
  )

}

export default Code
