import DocsNavLinkList from '@/components/DocsNavLinkList'
import { BookIcon } from 'lucide-react'
import { ReactElement } from 'react'

const MenuDescription = (): ReactElement => {
  return (
    <div className="flex items-center gap-2 px-3 mb-2">
      <BookIcon className="h-5 w-5 text-pink-500 dark:text-pink-400" />
      <h3 className="font-semibold text-gray-900 dark:text-white">Docs</h3>
    </div>
  )
}

interface DocsNavMenu {
  selected: string
  close(): void
}

const DocsNavMenu = ( props:DocsNavMenu ): ReactElement => {
  const { selected, close } = props
  return (
    <div className="pt-2">
      <MenuDescription />
      <nav className="space-y-1">
        <DocsNavLinkList selected={ selected } onClick={ close } />
      </nav>
    </div>
  )
}

export default DocsNavMenu
