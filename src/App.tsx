import Docs from '@/pages/Docs'
import Home, { HomeLayout } from '@/pages/Home'
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
          <Route path="/docs/:topic?" element={ <Docs /> } />
          <Route path="*" element={ <NotFound /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
