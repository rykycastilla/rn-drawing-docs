import { ReactElement } from 'react'
import { Tooltip, TooltipProvider, TooltipTrigger } from '@/libs/ui/tooltip'
import type { LucideIcon } from 'lucide-react'

interface ToolCardProps {
  icon: LucideIcon
  name: string
}

const ToolCard = ( props:ToolCardProps ): ReactElement => {
  const { icon:Icon, name } = props
  return (
    <div className="bg-white dark:bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all hover:border-pink-200/50 dark:hover:border-pink-800/50 border-2 border-transparent hover:scale-105">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex flex-col items-center text-center">
              <div className="text-pink-500 dark:text-pink-400 mb-3">
                <Icon className="h-8 w-8" />
              </div>
              <h3 className="font-medium text-lg">{ name }</h3>
            </div>
          </TooltipTrigger>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}

export default ToolCard
