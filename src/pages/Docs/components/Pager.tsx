import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ReactElement } from 'react'
import { useLanguage } from '@/hooks/language'
import { usePage } from '../hooks/page'
import { usePageIndex } from '../hooks/page_index'

enum PagerNav {
  PREVIOUS,
  NEXT,
}

interface PagerProps {
  to: PagerNav
}

const Pager = ( props:PagerProps ): ReactElement => {

  const { to } = props
  // Calculating link index
  const pageIndex = usePageIndex()
  const pagerDirection: number = ( to === PagerNav.PREVIOUS ) ? -1 : 1
  // Getting link page
  const linkIndex: number = pageIndex + pagerDirection
  const linkPage = usePage( linkIndex )
  // Translating
  const { t } = useLanguage()

  if( linkPage === undefined ) {
    return <div />
  }

  return (
    <Link
      to={ `/docs/${ linkPage.target }` }
      className="flex items-center gap-2 text-pink-500 hover:text-pink-600 dark:text-pink-400 dark:hover:text-pink-300 no-underline">
      { ( to === PagerNav.PREVIOUS ) && <ChevronLeft className="h-4 w-4" /> }
      <span>{ t( linkPage.title ) }</span>
      { ( to === PagerNav.NEXT ) && <ChevronRight className="h-4 w-4" /> }
    </Link>
  )

}

export default Pager
export { PagerNav }
