import Pager, { PagerNav } from './Pager'
import { ReactElement } from 'react'

interface DocsLayoutProps {
  children: ReactElement[] | ReactElement
}

const DocsLayout = ( props:DocsLayoutProps ): ReactElement => {
  const { children } = props
  return (
    <div className="container py-10 relative z-10">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <div className="prose prose-pink dark:prose-invert max-w-none">
            { children }
            <div className="flex justify-between items-center mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
              <Pager to={ PagerNav.PREVIOUS } />
              <div />
              <Pager to={ PagerNav.NEXT } />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DocsLayout
