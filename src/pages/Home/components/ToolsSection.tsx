import FeatureSection from './FeatureSection'
import fillerMockupDark from '@/assets/filler_mockup_dark.gif'
import fillerMockupLight from '@/assets/filler_mockup_light.gif'
import pencilMockupDark from '@/assets/pencil_mockup_dark.gif'
import pencilMockupLight from '@/assets/pencil_mockup_light.gif'
import sprayMockupDark from '@/assets/spray_mockup_dark.gif'
import sprayMockupLight from '@/assets/spray_mockup_light.gif'
import { ReactElement } from 'react'
import { useLanguage } from '@/hooks/language'

const ToolsSection = (): ReactElement => {
  const { t } = useLanguage()
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container">
        <FeatureSection
          title={ t( 'pencil' ) }
          description={ t( 'pencil-description' ) }
          lightPreview={ pencilMockupLight }
          darkPreview={ pencilMockupDark }
          imagePosition="left"
          color="#1A1A1A" />
        <FeatureSection
          title={ t( 'dynamic-spray' ) }
          description={ t( 'dynamic-spray-description' ) }
          lightPreview={ sprayMockupLight }
          darkPreview={ sprayMockupDark }
          imagePosition="right"
          color="#FF69B4" />
        <FeatureSection
          title={ t( 'animated-filler' ) }
          description={ t( 'animated-filler-description' ) }
          lightPreview={ fillerMockupLight }
          darkPreview={ fillerMockupDark }
          imagePosition="left"
          color="#4ADE80" />
      </div>
    </section>
  )
}

export default ToolsSection
