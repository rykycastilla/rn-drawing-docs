import DocsNavLink from './components/DocsNavLink'
import GitHubButton from './components/GitHubButton'
import HomeLink from './components/HomeLink'
import LanguageToggle from './components/LanguageToggle'
import MobileMenu from '@/components/MobileMenu'
import ThemeToggle from './components/ThemeToggle'
import { ReactElement } from 'react'
import { REPO_NAME, REPO_OWNER } from '@/constants'
import { useDocsLocation } from '@/hooks/docs_location'

const NavBar = (): ReactElement => {
  const isInDocs = useDocsLocation()
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <HomeLink />
          { !isInDocs &&  <DocsNavLink /> }
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3">
            <GitHubButton repoName={ REPO_NAME } repoOwner={ REPO_OWNER } />
            <LanguageToggle />
            <ThemeToggle />
          </div>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

export default NavBar
