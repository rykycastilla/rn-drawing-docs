import { ForwardedRef, forwardRef, ReactElement } from 'react'

interface PreviewProps {
  isImmersive: boolean
  preview: string
}

const Preview = forwardRef( ( props:PreviewProps, ref:ForwardedRef<HTMLVideoElement|null> ): ReactElement => {
  const { isImmersive, preview } = props
  return (
    <video
      ref={ ref }
      className={ isImmersive ? ' h-full' : 'h-450px' }
      src={ preview }
      controls={ false }
      autoPlay
      muted />
  )
} )

export default Preview
