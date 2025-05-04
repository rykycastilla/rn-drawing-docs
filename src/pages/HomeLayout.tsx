import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import { LegendProvider } from '@/hooks/foot_note'
import { Outlet } from 'react-router-dom'
import { ReactElement } from 'react'
import { ThemeProvider } from '@/libs/ui/hooks/theme'

const HomeLayout = (): ReactElement => {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <LegendProvider>
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </LegendProvider>
      </div>
    </ThemeProvider>
  )
}

export default HomeLayout
