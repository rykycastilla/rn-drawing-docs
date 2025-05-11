import NavMenu from './NavMenu'
import Pager, { PagerNav } from './Pager'
import { ReactElement } from 'react'
import { useParams } from 'react-router-dom'

interface DocsLayoutProps {
  children: ReactElement[] | ReactElement
}

const DocsLayout = ( props:DocsLayoutProps ): ReactElement | null => {

  const { children } = props
  const { topic } = useParams()

  if( topic === undefined ) {
    return null
  }

  return (
    <div className="container py-10 relative z-10">
      <div className="flex flex-col md:flex-row gap-10">
        <NavMenu selected={ topic } />
        <div className="flex-1">
          <div className="prose prose-pink dark:prose-invert max-w-none">
            { children }
            <div className="flex justify-between items-center mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
              <Pager to={ PagerNav.PREVIOUS } />
              <Pager to={ PagerNav.NEXT } />
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default DocsLayout
