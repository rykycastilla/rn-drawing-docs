import { useCallback, useEffect, useState } from 'react'

const darkThemeQuery = window.matchMedia( '(prefers-color-scheme: dark)' )

export function useDarkSystem(): boolean {

  const [ isDark, setIsDark ] = useState( darkThemeQuery.matches )

  const updateTheme = useCallback( () => {
    setIsDark( darkThemeQuery.matches )
  }, [] )

  useEffect( () => {
    darkThemeQuery.addEventListener( 'change', updateTheme )
    return () => darkThemeQuery.removeEventListener( 'change', updateTheme )
  }, [ updateTheme ] )

  return isDark

}
