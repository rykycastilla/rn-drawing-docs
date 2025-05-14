import AllToolsSection from './components/AllToolsSection'
import CodeSampleSection from './components/CodeSampleSection'
import DocsLink from './components/DocsLink'
import HeroSection from './components/HeroSection'
import HistorySection from './components/HistorySection'
import PerformanceSection from './components/PerformanceSection'
import ToolsSection from './components/ToolsSection'
import { ReactElement } from 'react'
import { useLocalesOf } from '@/hooks/language'

const Home = (): ReactElement => {
  useLocalesOf( 'home' )
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
