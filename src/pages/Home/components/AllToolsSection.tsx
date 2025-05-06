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
            name={ t( 'zoom' ) } />
          <ToolCard
            icon={ Pipette }
            name={ t( 'eye-dropper' ) } />
          <ToolCard
            icon={ SprayCanIcon }
            name={ t( 'spray' ) } />
          <ToolCard
            icon={ Pen }
            name={ t( 'pen' ) } />
          <ToolCard
            icon={ TapeIcon as unknown as LucideIcon }
            name={ t( 'tape' ) } />
          <ToolCard
            icon={ Pencil }
            name={ t( 'pencil' ) } />
          <ToolCard
            icon={ Eraser }
            name={ t( 'eraser' ) } />
          <ToolCard
            icon={ PaintBucket }
            name={ t( 'tape' ) } />
        </div>
      </div>
    </section>
  )
}

export default AllToolsSection
