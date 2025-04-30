import HomeLink from './components/HomeLink'
import { ReactElement } from 'react'

const NavBar = (): ReactElement => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <HomeLink />
        </div>
      </div>
    </header>
  )
}

export default NavBar
