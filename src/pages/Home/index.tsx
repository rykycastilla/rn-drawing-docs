import CodeSampleSection from './components/CodeSampleSection'
import HeroSection from './components/HeroSection'
import ToolsSection from './components/ToolsSection'
import { ReactElement } from 'react'

const Home = (): ReactElement => {
  return (
    <>
      <HeroSection />
      <CodeSampleSection />
      <ToolsSection />
    </>
  )
}

export default Home
