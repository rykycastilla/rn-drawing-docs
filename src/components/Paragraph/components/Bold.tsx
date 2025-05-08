import { ReactElement } from 'react'

interface BoldProps {
  children: string
}

const Bold = ( props:BoldProps ): ReactElement => {
  const { children } = props
  return <strong>{ children }</strong>
}

export default Bold
