import { createContext } from 'react'

export interface NotFoundDocContext {
  isNotFound: boolean
  setIsNotFound( isNotFound:boolean ): void
}

export const NotFoundDocContext = createContext<NotFoundDocContext|null>( null )
