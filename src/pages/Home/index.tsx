import CodeSampleSection from './components/CodeSampleSection'
import HeroSection from './components/HeroSection'
import HistorySection from './components/HistorySection'
import ToolsSection from './components/ToolsSection'
import { ReactElement } from 'react'

const Home = (): ReactElement => {
  return (
    <>
      <HeroSection />
      <CodeSampleSection />
      <ToolsSection />
      <HistorySection />
    </>
  )
}

export default Home
