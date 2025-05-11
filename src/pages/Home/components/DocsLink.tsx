import { Link } from 'react-router-dom'
import { ReactElement } from 'react'
import { useLanguage } from '@/hooks/language'

const DocsLink = (): ReactElement => {
  const { t } = useLanguage()
  return (
    <section id="docs" className="py-20 bg-background">
      <div className="container text-center">
        <Link
          to="/docs"
          className="inline-flex items-center text-xl font-medium text-pink-500 hover:text-pink-600 dark:text-pink-400 dark:hover:text-pink-300 transition-colors">
          { t( 'home-docs-link' ) } →
        </Link>
      </div>
    </section>
  )
}

export default DocsLink
