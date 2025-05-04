import FeatureSection from './FeatureSection'
import fillerMockupDark from '@/assets/filler_mockup_dark.gif'
import fillerMockupLight from '@/assets/filler_mockup_light.gif'
import pencilMockupDark from '@/assets/pencil_mockup_dark.gif'
import pencilMockupLight from '@/assets/pencil_mockup_light.gif'
import sprayMockupDark from '@/assets/spray_mockup_dark.gif'
import sprayMockupLight from '@/assets/spray_mockup_light.gif'
import { ReactElement } from 'react'

const ToolsSection = (): ReactElement => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container">
        <FeatureSection
          title="Lápiz"
          description="Trazo ultrafino para detalles precisos en cualquier proyecto"
          lightPreview={ pencilMockupLight }
          darkPreview={ pencilMockupDark }
          imagePosition="left"
          color="#1A1A1A" />
        <FeatureSection
          title="Spray Dinámico"
          description="Efectos de partículas personalizables con control total"
          lightPreview={ sprayMockupLight }
          darkPreview={ sprayMockupDark }
          imagePosition="right"
          color="#FF69B4" />
        <FeatureSection
          title="Rellenador Animado"
          description="Animaciones fluidas optimizadas para todos los dispositivos"
          lightPreview={ fillerMockupLight }
          darkPreview={ fillerMockupDark }
          imagePosition="left"
          color="#4ADE80" />
      </div>
    </section>
  )
}

export default ToolsSection
