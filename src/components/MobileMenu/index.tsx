import CloseButton from './components/CloseButton'
import DocsNavMenu from './components/DocsNavMenu'
import GitHubButton from './components/GitHubButton'
import LanguageToggle from './components/LanguageToggle'
import MenuButton from './components/MenuButton'
import Panel from './components/Panel'
import ThemeButton from './components/ThemeButton'
import { REPO_NAME, REPO_OWNER } from '@/constants'
import { ReactElement, useState } from 'react'
import { useCallback } from 'react'
import { useSelectedDoc } from './hooks/selected_doc'

const MobileMenu = (): ReactElement => {

  const [ isOpen, setIsOpen ] = useState( false )
  const selected = useSelectedDoc()

  const close = useCallback( () => {
    setIsOpen( false )
  }, [] )

  return (
    <div className="md:hidden">
      <MenuButton open={ () => setIsOpen( true ) } />
      <Panel isOpen={ isOpen } close={ close }>
        <CloseButton close={ close } />
        <div className="grid grid-cols-1 gap-4">
          <GitHubButton repoOwner={ REPO_OWNER } repoName={ REPO_NAME } close={ close } />
          <LanguageToggle close={ close } />
          <ThemeButton close={ close } />
          {
            ( selected !== undefined ) &&
            <>
              { /* Section divider */ }
              <div className="h-px bg-gray-200 dark:bg-gray-800 my-2" />
              <DocsNavMenu selected={ selected } close={ close } />
            </>
          }
        </div>
      </Panel>
    </div>
  )

}

export default MobileMenu
