import { data } from '../data'
import { Link } from 'react-router-dom'
import { ReactElement } from 'react'
import { useLanguage } from '@/hooks/language'

interface NavLinkProps {
  title: string
  target: string
  isSelected: boolean
}

const NavLink = ( props:NavLinkProps ): ReactElement => {
  const { title, target, isSelected } = props
  const { t } = useLanguage()
  return (
    <Link
      to={ `/docs/${ target }` }
      className={
        `block px-3 py-2 rounded-md transition-colors
        ${ isSelected ? 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800' }`
      }>
      { t( title ) }
    </Link>
  )
}

interface NavLinkListProps {
  selected: string
}

const NavLinkList = ( props:NavLinkListProps ): ReactElement => {
  const { selected } = props
  const navLinkList: ReactElement[] = []
  for( const page of data ) {
    const { title, target } = page
    const isSelected: boolean = selected === target
    const navLink: ReactElement = (
      <NavLink
        key={ target }
        title={ title }
        target={ target }
        isSelected={ isSelected } />
    )
    navLinkList.push( navLink )
  }
  return <>{ navLinkList }</>
}

interface NavMenuProps {
  selected: string
}

const NavMenu = ( props:NavMenuProps ): ReactElement => {
  const { selected } = props
  return (
    <div className="hidden md:block w-64 shrink-0">
      <div className="sticky top-24 bg-white dark:bg-card rounded-lg shadow-md p-4">
        <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Docs</h3>
        <nav className="space-y-2">
          <NavLinkList selected={ selected } />
        </nav>
      </div>
    </div>
  )
}

export default NavMenu
