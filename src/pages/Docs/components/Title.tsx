import { ReactElement } from 'react'

interface TitleProps {
  children: string
}

const Title = ( props:TitleProps ): ReactElement => {
  const { children } = props
  return (
    <h1
      className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
      { children }
    </h1>
  )
}

export default Title
