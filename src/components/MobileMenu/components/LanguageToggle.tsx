import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/libs/ui/dropdown-menu'
import { ReactElement, useCallback } from 'react'
import { useLanguage } from '@/hooks/language'

interface LanguageToggleProps {
  close(): void
}

const LanguageToggle = ( props:LanguageToggleProps ): ReactElement => {

  const { close } = props
  const { t, languageConfig, language, setLanguage } = useLanguage()

  // Get language name
  const getLanguageName = () => {
    switch ( languageConfig ) {
    case 'es':
      return t( 'language-es' )
    case 'en':
      return t( 'language-en' )
    case 'system':
      return t( 'language-system' )
    default:
      return language
    }
  }

  const changeLanguage = useCallback( ( language:( 'es'|'en'|'system' ) ) => {
    setLanguage( language )
    close()
  }, [ setLanguage, close ] )

  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 w-full text-left">
            <div className="flex items-center justify-center w-5 h-5 font-medium">{ language.toUpperCase() }</div>
            <span className="font-medium">{ t( 'language', `(${ getLanguageName() })` ) }</span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-[150px]">
          <DropdownMenuItem
            onClick={ () => changeLanguage( 'es' ) }
            className="flex items-center gap-2">
            <span>{ t( 'language-es' ) }</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={ () => changeLanguage( 'en' ) }
            className="flex items-center gap-2">
            <span>{ t( 'language-en' ) }</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={ () => changeLanguage( 'system' ) }
            className="flex items-center gap-2">
            <span>{ t( 'language-system' ) }</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default LanguageToggle
