import { Info as InfoLogo } from 'lucide-react'
import { ReactElement } from 'react'
import { useLanguage } from '@/hooks/language'

interface InfoProps {
  children: string
}

const Info = ( props:InfoProps ): ReactElement => {
  const { children } = props
  const { t } = useLanguage()
  return (
    <div className="my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 dark:border-blue-500/70 rounded-r-lg">
      <div className="flex">
        <div className="flex-shrink-0">
          <InfoLogo className="h-5 w-5 text-blue-500" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-blue-800 dark:text-blue-300">{ t( 'docs-info' ) }</h3>
          <div className="mt-2 text-sm text-blue-700 dark:text-blue-200">{ children }</div>
        </div>
      </div>
    </div>
  )
}

export default Info
