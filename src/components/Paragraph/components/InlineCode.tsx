import { ReactElement } from 'react'
import './InlineCode.css'

interface InlineCodeProps {
  children: string
}

const InlineCode = ( props:InlineCodeProps ): ReactElement => {
  const { children } = props
  return <code className="inline-code">{ children }</code>
}

export default InlineCode
