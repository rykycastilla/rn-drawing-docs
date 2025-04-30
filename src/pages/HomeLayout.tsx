import NavBar from '@/components/NavBar'
import { Outlet } from 'react-router-dom'
import { ReactElement } from 'react'
import { ThemeProvider } from '@/libs/ui/hooks/theme'

const HomeLayout = (): ReactElement => {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default HomeLayout
