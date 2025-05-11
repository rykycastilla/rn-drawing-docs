import { data } from '@/pages/Docs/data'
import { Link } from 'react-router-dom'
import { ReactElement } from 'react'
import { useLanguage } from '@/hooks/language'

interface NavLinkProps {
  title: string
  target: string
  isSelected: boolean
  onClick?: () => void
}

const DocsNavLink = ( props:NavLinkProps ): ReactElement => {
  const { title, target, isSelected, onClick } = props
  const { t } = useLanguage()
  return (
    <Link
      to={ `/docs/${ target }` }
      className={
        `block px-3 py-2 rounded-md transition-colors
        ${ isSelected ? 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800' }`
      }
      onClick={ onClick }>
      { t( title ) }
    </Link>
  )
}

interface NavLinkListProps {
  selected: string
  onClick?: () => void
}

const DocsNavLinkList = ( props:NavLinkListProps ): ReactElement => {
  const { selected, onClick } = props
  const navLinkList: ReactElement[] = []
  for( const page of data ) {
    const { title, target } = page
    const isSelected: boolean = selected === target
    const navLink: ReactElement = (
      <DocsNavLink
        key={ target }
        title={ title }
        target={ target }
        isSelected={ isSelected }
        onClick={ onClick } />
    )
    navLinkList.push( navLink )
  }
  return <>{ navLinkList }</>
}

export default DocsNavLinkList
