import { Maximize2, Minimize2 } from 'lucide-react'
import { ReactElement } from 'react'

interface MaximizeProps {
  isFullScreen: boolean
  toggleFullScreen(): void
}

const Maximize = ( props:MaximizeProps ): ReactElement => {
  const { isFullScreen, toggleFullScreen } = props
  return (
    <button
      onClick={ toggleFullScreen }
      className="p-1 rounded hover:bg-gray-700 transition-colors"
      title={ isFullScreen ? 'Salir de pantalla completa' : 'Ver en pantalla completa' }>
      { isFullScreen ? <Minimize2 size={ 16 } /> : <Maximize2 size={ 16 } />}
    </button>
  )
}

export default Maximize
