import TapeIcon from './TapeIcon'
import ToolCard from './ToolCard'
import { Eraser, LucideIcon, PaintBucket, Pen, Pencil, ZoomIn, Pipette, SprayCanIcon } from 'lucide-react'
import { ReactElement } from 'react'
import { useLanguage } from '@/hooks/language'

const AllToolsSection = (): ReactElement => {
  const { t } = useLanguage()
  return (
    <section id="tools" className="py-20 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-10">{ t( 'tools-sample-title' ) }</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <ToolCard
            icon={ ZoomIn }
            name={ t( 'zoom' ) }
            description="Acerca o aleja el lienzo para trabajar en detalles" />
          <ToolCard icon={ Pipette } name={ t( 'eye-dropper' ) } description="Captura cualquier color del lienzo" />
          <ToolCard
            icon={ SprayCanIcon }
            name={ t( 'spray' ) }
            description="Crea efectos de aerosol con partículas personalizables" />
          <ToolCard icon={ Pen } name={ t( 'pen' ) } description="Trazos fluidos con presión variable" />
          <ToolCard
            icon={ TapeIcon as unknown as LucideIcon }
            name={ t( 'tape' ) }
            description="Crea líneas rectas y formas con cinta adhesiva" />
          <ToolCard icon={ Pencil } name={ t( 'pencil' ) } description="Trazo natural con textura de lápiz" />
          <ToolCard icon={ Eraser } name={ t( 'eraser' ) } description="Borra con precisión y control total" />
          <ToolCard
            icon={ PaintBucket }
            name={ t( 'tape' ) }
            description="Rellena áreas con color de forma inteligente" />
        </div>
      </div>
    </section>
  )
}

export default AllToolsSection
