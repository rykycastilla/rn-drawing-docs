import { Link } from 'react-router-dom'
import { ReactElement } from 'react'

interface BookIconProps {
  className: string
}

const BookIcon = ( props:BookIconProps ): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      { ...props }>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}

const DocsNavLink = (): ReactElement => {
  return (
    <Link
      to="/docs"
      className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-300 transition-colors">
      <BookIcon className="h-5 w-5" />
      <span className="font-medium hidden md:inline">Docs</span>
    </Link>
  )
}

export default DocsNavLink
