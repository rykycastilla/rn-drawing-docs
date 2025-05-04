import PerformanceChart from '@/components/PerformanceChart'
import { ReactElement } from 'react'

const PerformanceSection = (): ReactElement => {
  return (
    <section id="performance" className="py-10 md:py-20 bg-gray-50 dark:bg-secondary">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 md:mb-4">Rendimiento Excepcional</h2>
        <p className="text-center text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4 md:mb-10 max-w-2xl mx-auto">
              Optimizado para ser ligero y fluido incluso en operaciones complejas
        </p>
        <div className="max-w-3xl mx-auto h-[350px] md:h-[400px]">
          <PerformanceChart
            data={
              {
                'Trazado': 60,
                'Guardado automático': 35,
                'Rellenado': 50,
                'Rellenado animado': 40,
              }
            } />
        </div>
      </div>
    </section>
  )
}

export default PerformanceSection
