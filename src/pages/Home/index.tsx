import CodeSampleSection from './components/CodeSampleSection'
import HeroSection from './components/HeroSection'
import { ReactElement } from 'react'

const Home = (): ReactElement => {
  return (
    <>
      <HeroSection />
      <CodeSampleSection />
    </>
  )
}

export default Home
