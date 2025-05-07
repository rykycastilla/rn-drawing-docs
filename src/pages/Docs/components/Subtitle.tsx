import { ReactElement } from 'react'

interface SubtitleProps {
  children: string
}

const Subtitle = ( props:SubtitleProps ): ReactElement => {
  const { children } = props
  return (
    <h2
      className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
      { children }
    </h2>
  )
}

export default Subtitle
