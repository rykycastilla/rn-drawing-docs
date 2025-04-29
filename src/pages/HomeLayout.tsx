import { Outlet } from 'react-router-dom'
import { ReactElement } from 'react'
import { ThemeProvider } from '@/libs/ui/hooks/theme'

const HomeLayout = (): ReactElement => {
  return (
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  )
}

export default HomeLayout
