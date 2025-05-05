import { Button } from '@/libs/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/libs/ui/dropdown-menu'
import { ReactElement, useState, useEffect } from 'react'

const LanguageToggle = (): ReactElement => {

  const [ language, setLanguage ] = useState<'es'|'en'|'system'>( 'system' )
  const [ mounted, setMounted ] = useState( false )

  // Detect system language
  const getSystemLanguage = (): 'es' | 'en' => {
    if ( navigator === undefined ) { return 'en' }
    const browserLang = navigator.language ?? ''
    return browserLang.toLowerCase().startsWith( 'es' ) ? 'es' : 'en'
  }

  // Gets the current language
  const getCurrentLanguage = (): 'ES' | 'EN' => {
    if( language === 'system' ) {
      return ( getSystemLanguage() === 'es' ) ? 'ES' : 'EN'
    }
    return ( language === 'es' ) ? 'ES' : 'EN'
  }

  // Ensure component is mounted to avoid hydration mismatch
  useEffect( () => {
    setMounted( true )
  }, [] )

  if ( !mounted ) {
    return (
      <Button variant="outline" size="icon">
        <span className="font-medium">EN</span>
        <span className="sr-only">Cambiar idioma</span>
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="bg-background w-10">
          <span className="font-medium">{ getCurrentLanguage() }</span>
          <span className="sr-only">Cambiar idioma</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" onClick={ ( event ) => event.stopPropagation() }>
        <DropdownMenuItem
          onClick={ () => setLanguage( 'es' ) }
          className={ ( language === 'es' ) ? 'bg-muted' : '' }>
          Español
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={ () => setLanguage( 'en' ) }
          className={ ( language === 'en' ) ? 'bg-muted' : '' }>
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={ () => setLanguage( 'system' ) }
          className={ ( language === 'system' ) ? 'bg-muted' : '' }>
          Sistema
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )

}

export default LanguageToggle
