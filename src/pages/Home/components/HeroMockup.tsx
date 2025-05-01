import AnimatedMockup from '@/components/AnimatedMockup'
import heroMockupDark from '@/assets/hero_mockup_dark.gif'
import heroMockupLight from '@/assets/hero_mockup_light.gif'
import { ReactElement } from 'react'
import { useTheme } from '@/libs/ui/hooks/theme'

const HeroMockup = (): ReactElement => {
  const { theme } = useTheme()
  const heroMockup : string = ( theme === 'dark' ) ? heroMockupDark : heroMockupLight
  return (
    <AnimatedMockup className="border-gray-800 dark:border-white mb-8">
      <img src={ heroMockup } />
    </AnimatedMockup>
  )
}

export default HeroMockup
