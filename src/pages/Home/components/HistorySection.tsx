import { FootNote } from '@/hooks/foot_note'
import { ReactElement } from 'react'
import { useLanguage } from '@/hooks/language'

const HistorySection = (): ReactElement => {
  const { t } = useLanguage()
  return (
    <section className="py-20 bg-gray-50 dark:bg-secondary">
      <div className="container text-center">
        <h2 className="text-3xl font-bold mb-10">{ t( 'history-title' ) }</h2>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          { t( 'history-description' ) }
          <FootNote>
            { t( 'history-memory-usage-disclaimer' ) }
          </FootNote>.
        </p>
      </div>
    </section>
  )
}

export default HistorySection
