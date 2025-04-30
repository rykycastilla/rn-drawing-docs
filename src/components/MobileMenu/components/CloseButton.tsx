import { Button } from '@/libs/ui/button'
import { ReactElement } from 'react'
import { X } from 'lucide-react'

interface CloseButtonProps {
  close(): void
}

const CloseButton = ( props:CloseButtonProps ): ReactElement => {
  const { close } = props
  return (
    <div className="flex justify-end mb-2">
      <Button
        variant="ghost"
        size="icon"
        onClick={ () => close() }
        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 -mr-2 -mt-1">
        <X className="h-5 w-5" />
        <span className="sr-only">Cerrar menú</span>
      </Button>
    </div>
  )
}

export default CloseButton
