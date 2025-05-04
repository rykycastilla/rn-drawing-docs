import { Link as RouterLink } from 'react-router-dom'
import { ReactElement } from 'react'

interface LinkProps {
  title: string
  href: string
}

const Link = ( props:LinkProps ): ReactElement => {
  const { title, href } = props
  return (
    <RouterLink
      to={ href }
      className="text-sm text-gray-500 hover:text-pink-500 dark:text-gray-400 dark:hover:text-pink-400 transition-colors">
      { title }
    </RouterLink>
  )
}

export default Link
