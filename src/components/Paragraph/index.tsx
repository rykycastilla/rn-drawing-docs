import { ReactElement } from 'react'
import { useParagraphRenderer } from './hooks/paragraph_renderer'

interface ParagraphProps {
  children: string
}

const Paragraph = ( props:ParagraphProps ): ReactElement => {
  const { children } = props
  const rendered = useParagraphRenderer( children )
  return <p>{ rendered }</p>
}

export default Paragraph
