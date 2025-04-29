import { useCallback, useEffect, useState } from 'react'
import { useStorageManager } from './storage_manager'

/**
 * Custom hook the create an state that persists between sessions.
 * Don't modify defaultValue nor key (Must be constants)
 * Passing undefined values to state setter is translated to use defaultValue instead of it
 * @param defaultValue  Same as useState traditional hook
 * @param key  An identification key for the storage access of this value
 */
export function useStorageState<T>( defaultValue:T, key:string ): [ T, ( state:T ) => void ] {

  const [ state, setState ] = useState<T>( defaultValue )
  const storageManager = useStorageManager<T>( key )

  useEffect( () => {
    const savedValue: T | undefined = storageManager.get()
    if( savedValue !== undefined ) { setState( savedValue ) }
  }, [ storageManager ] )

  const saveState = useCallback( ( state:T ) => {
    if( state === undefined ) { state = defaultValue }
    storageManager.save( state )
    setState( state )
  }, [ defaultValue, storageManager ] )

  return [ state, saveState ]

}
