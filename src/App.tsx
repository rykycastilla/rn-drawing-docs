import Home from '@/pages/Home'
import HomeLayout from '@/pages/HomeLayout'
import NotFound from '@/pages/NotFound'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ReactElement } from 'react'
import './App.css'

const App = (): ReactElement | null => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomeLayout /> }>
          <Route path="/" element={ <Home /> } />
          <Route path="*" element={ <NotFound /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
