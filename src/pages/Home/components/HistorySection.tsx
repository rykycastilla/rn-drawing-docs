import { ReactElement } from 'react'

const HistorySection = (): ReactElement => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-secondary">
      <div className="container text-center">
        <h2 className="text-3xl font-bold mb-10">Nunca olvides tu Historia</h2>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Accede al historial completo de tus trazos y cambios con un simple gesto. Deshaz y rehaz sin límites.
        </p>
      </div>
    </section>
  )
}

export default HistorySection
