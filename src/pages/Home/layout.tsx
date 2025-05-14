import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import { LanguageProvider } from '@/hooks/language'
import { LegendProvider } from '@/hooks/foot_note'
import { NotFoundDocProvider } from '@/hooks/docs_location'
import { Outlet } from 'react-router-dom'
import { ReactElement } from 'react'
import { ThemeProvider } from '@/libs/ui/hooks/theme'

const HomeLayout = (): ReactElement => {
  return (
    <ThemeProvider>
      <LanguageProvider langs="en,es" defaultLang="en">
        <NotFoundDocProvider>
          <div className="flex flex-col min-h-screen">
            <NavBar />
            <LegendProvider>
              <main className="flex-1">
                <Outlet />
              </main>
              <Footer />
            </LegendProvider>
          </div>
        </NotFoundDocProvider>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default HomeLayout
