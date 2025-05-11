import DocsNavLinkList from '@/components/DocsNavLinkList'
import { ReactElement } from 'react'
import { useLanguage } from '@/hooks/language'

interface NavMenuProps {
  selected: string
}

const NavMenu = ( props:NavMenuProps ): ReactElement => {
  const { selected } = props
  const { t } = useLanguage()
  return (
    <div className="hidden md:block w-64 shrink-0">
      <div className="sticky top-24 bg-white dark:bg-card rounded-lg shadow-md p-4">
        <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">{ t( 'docs-index' ) }</h3>
        <nav className="space-y-2">
          <DocsNavLinkList selected={ selected } />
        </nav>
      </div>
    </div>
  )
}

export default NavMenu
