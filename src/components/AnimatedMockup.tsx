import { ReactElement, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface AnimatedMockupProps {
  className?: string
  children?: ReactElement[] | ReactElement
}

const AnimatedMockup = ( props:AnimatedMockupProps ): ReactElement => {

  const { className, children } = props
  const [ hasAnimated, setHasAnimated ] = useState( false )
  const { ref, inView } = useInView( { triggerOnce: true, threshold: 0.1 } )

  useEffect( () => {
    if( inView && !hasAnimated ) { setHasAnimated( true ) }
  }, [ inView, hasAnimated ] )

  return (
    <div
      ref={ ref }
      className={
        `w-full max-w-[153px] md:max-w-[256px] aspect-[9/16] border-2 border-dashed rounded-xl flex items-center justify-center
        ${ className || '' } ${ hasAnimated ? 'animate-fade-up opacity-100' : 'opacity-0' }`
      }>
      { children }
    </div>
  )

}

export default AnimatedMockup
