import { ReactNode, useEffect } from 'react'

const { title } = document

function processTitle( title:ReactNode ): string {
  if( title instanceof Array ) { return title.join( '' ) }
  return String( title )
}

interface TitleProps {
  children: ReactNode
}

const Title = ( props:TitleProps ): null => {
  const { children } = props
  useEffect( () => {
    document.title = processTitle( children )
    return () => { document.title = title }
  }, [ children ] )
  return null
}

export default Title
