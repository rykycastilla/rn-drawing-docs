import { Play, Square } from 'lucide-react'
import { ReactElement } from 'react'

interface CommandButtonProps {
  isPlaying: boolean
  disabled: boolean
  togglePlay(): void
}

const CommandButton = ( props:CommandButtonProps ): ReactElement => {
  const { isPlaying, disabled, togglePlay } = props
  return (
    <button
      onClick={ togglePlay }
      className={ `p-1 rounded hover:bg-gray-700 transition-colors ${ disabled ? 'opacity-50 cursor-not-allowed' : '' }` }
      disabled={ disabled }
      title={ isPlaying ? 'Detener demostración' : 'Ver demostración' }>
      { isPlaying ? <Square size={ 16 } /> : <Play size={ 16 } /> }
    </button>
  )
}

export default CommandButton
