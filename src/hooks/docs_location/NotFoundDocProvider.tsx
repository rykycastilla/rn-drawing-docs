import { NotFoundDocContext } from './context'
import { ReactElement, useState } from 'react'

interface NotFoundDocProviderProps {
  children: ReactElement[] | ReactElement
}

const NotFoundDocProvider = ( props:NotFoundDocProviderProps ): ReactElement => {
  const { children } = props
  const [ isNotFound, setIsNotFound ] = useState( false )
  return (
    <NotFoundDocContext.Provider value={ { isNotFound, setIsNotFound } }>
      { children }
    </NotFoundDocContext.Provider>
  )
}

export default NotFoundDocProvider
