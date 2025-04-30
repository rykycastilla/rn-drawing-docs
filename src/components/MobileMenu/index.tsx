import CloseButton from './components/CloseButton'
import GitHubButton from './components/GitHubButton'
import MenuButton from './components/MenuButton'
import Panel from './components/Panel'
import ThemeButton from './components/ThemeButton'
import { REPO_NAME, REPO_OWNER } from '@/constants'
import { ReactElement, useState } from 'react'
import { useCallback } from 'react'

const MobileMenu = (): ReactElement => {

  const [ isOpen, setIsOpen ] = useState( false )

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
          <ThemeButton close={ close } />
        </div>
      </Panel>
    </div>
  )

}

export default MobileMenu
