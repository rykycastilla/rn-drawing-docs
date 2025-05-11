import { AlertTriangle } from 'lucide-react'
import { ReactElement } from 'react'
import { useLanguage } from '@/hooks/language'

interface WarningProps {
  children: string
}

const Warning = ( props:WarningProps ): ReactElement => {
  const { t } = useLanguage()
  const { children } = props
  return (
    <div className="my-6 p-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 dark:border-amber-500/70 rounded-r-lg">
      <div className="flex">
        <div className="flex-shrink-0">
          <AlertTriangle className="h-5 w-5 text-amber-500" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-amber-800 dark:text-amber-300">{ t( 'docs-warning' ) }</h3>
          <div className="mt-2 text-sm text-amber-700 dark:text-amber-200">{ children }</div>
        </div>
      </div>
    </div>
  )
}

export default Warning
