import { ReactElement } from 'react'

interface ItalicProps {
  children: string
}

const Italic = ( props:ItalicProps ): ReactElement => {
  const { children } = props
  return <em>{ children }</em>
}

export default Italic
