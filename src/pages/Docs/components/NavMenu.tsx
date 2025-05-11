import DocsNavLinkList from '@/components/DocsNavLinkList'
import { ReactElement } from 'react'

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
          <DocsNavLinkList selected={ selected } />
        </nav>
      </div>
    </div>
  )
}

export default NavMenu
