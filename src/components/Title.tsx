import { useEffect } from 'react'

const { title } = document

interface TitleProps {
  children: string
}

const Title = ( props:TitleProps ): null => {
  const { children } = props
  useEffect( () => {
    document.title = children
    return () => { document.title = title }
  }, [ children ] )
  return null
}

export default Title
