import AllToolsSection from './components/AllToolsSection'
import CodeSampleSection from './components/CodeSampleSection'
import DocsLink from './components/DocsLink'
import HeroSection from './components/HeroSection'
import HistorySection from './components/HistorySection'
import PerformanceSection from './components/PerformanceSection'
import ToolsSection from './components/ToolsSection'
import { ReactElement } from 'react'

const Home = (): ReactElement => {
  return (
    <>
      <HeroSection />
      <CodeSampleSection />
      <ToolsSection />
      <HistorySection />
      <AllToolsSection />
      <PerformanceSection />
      <DocsLink />
    </>
  )
}

export default Home
