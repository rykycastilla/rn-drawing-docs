import Link from './components/Link'
import { REPO_NAME, REPO_OWNER } from '@/constants'
import { ReactElement } from 'react'

const Footer = (): ReactElement => {
  const date = new Date()
  const year: number = date.getFullYear()
  return (
    <footer>
      <div className="border-t py-6 md:py-10 bg-background">
        <div className="container flex flex-col-reverse md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © { year } RN Drawing. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex gap-6 mb-4 md:mb-0">
            <Link title="GitHub" href={ `https://github.com/${ REPO_OWNER }/${ REPO_NAME }` } />
            <Link title="NPM" href={ `https://www.npmjs.com/package/${ REPO_NAME }` } />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
