import HeroMockup from './HeroMockup'
import { ReactElement } from 'react'
import { useLanguage } from '@/hooks/language'

const HeroSection = (): ReactElement => {
  const { t } = useLanguage()
  return (
    <section className="hero-section pt-10 md:pt-16 pb-20 md:pb-32">
      <div className="container flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
          { t( 'hero-title' ) }
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mb-12">
          { t( 'hero-description' ) }
        </p>
        <HeroMockup />
      </div>
    </section>
  )
}

export default HeroSection
