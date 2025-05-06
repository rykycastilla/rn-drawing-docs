import { Lang } from './Lang'
import { LanguageContext } from './context'
import { ReactElement, useCallback, useMemo } from 'react'
import { UnexpectedDefaultLanguageError } from './UnexpectedDefaultLanguageError'
import { useStorageState } from '@/libs/ui/hooks/storage_state'
import { useTemplateTranslation } from './template_translation'

const SYSTEM = 'system'

interface LanguageProviderProps<T extends Lang> {
  children: ReactElement
  langs: T[]
  defaultLang: string
}

const LanguageProvider = <T extends Lang>( props:LanguageProviderProps<T> ): ReactElement => {

  const { children, langs, defaultLang:defaultLangCode } = props
  const [ languageConfig, setLanguageConfig ] = useStorageState( SYSTEM, 'language' )

  const getSystemLanguage = useCallback( () => {
    const browserLanguage: string = navigator.language
    const [ languageId ] = browserLanguage.split( '-' ) as [ string, string ]
    return languageId
  }, [] )

  const chooseLanguage = useCallback( ( code:string ) => {
    let lang: T | undefined
    let defaultLang: T | undefined
    for( const thisLang of langs ) {
      if( thisLang.CODE === defaultLangCode ) { defaultLang = thisLang }
      if( thisLang.CODE === code ) { lang = thisLang }
    }
    if( defaultLang === undefined ) {
      throw new UnexpectedDefaultLanguageError( code )
    }
    if( lang !== undefined ) {
      return lang
    }
    else {
      console.warn( `Bad language config. Using default (${ defaultLangCode }) instead` )
      return defaultLang
    }

  }, [ ...langs, defaultLangCode ] )  // eslint-disable-line

  const [ code, lang ] = useMemo( () => {
    let code: string = languageConfig
    if( languageConfig === SYSTEM ) { code = getSystemLanguage() }
    const lang: T = chooseLanguage( code )
    return [ code, lang ]
  }, [ languageConfig, getSystemLanguage, chooseLanguage ] )

  const t = useTemplateTranslation( lang )

  return (
    <LanguageContext.Provider value={ { t, language:code, languageConfig, setLanguage:setLanguageConfig } }>
      { children }
    </LanguageContext.Provider>
  )

}

export default LanguageProvider
