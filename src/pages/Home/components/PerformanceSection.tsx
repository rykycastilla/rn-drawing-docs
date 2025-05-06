import PerformanceChart from '@/components/PerformanceChart'
import { FootNote } from '@/hooks/foot_note'
import { ReactElement } from 'react'
import { useLanguage } from '@/hooks/language'

const PerformanceSection = (): ReactElement => {
  const { t } = useLanguage()
  return (
    <section id="performance" className="py-10 md:py-20 bg-gray-50 dark:bg-secondary">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 md:mb-4">
          { t( 'performance-title' ) }
        </h2>
        <p className="text-center text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4 md:mb-10 max-w-2xl mx-auto">
          { t( 'performance-subtitle' ) }
          <FootNote>
            { t( 'performance-disclaimer' ) }
          </FootNote>
        </p>
        <div className="max-w-3xl mx-auto h-[350px] md:h-[400px]">
          <PerformanceChart
            data={
              {
                [ t( 'stroking' ) ]: 60,
                [ t( 'auto-save' ) ]: 35,
                [ t( 'filling' ) ]: 50,
                [ t( 'animated-filling' ) ]: 40,
              }
            } />
        </div>
      </div>
    </section>
  )
}

export default PerformanceSection
