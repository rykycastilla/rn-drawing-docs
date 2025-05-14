import { LanguageContext } from './context'
import { LanguageTools } from './LanguageTools'
import { ReactElement, useCallback, useMemo } from 'react'
import { UnexpectedDefaultLanguageError } from './UnexpectedDefaultLanguageError'
import { useDocLanguage } from './doc_language'
import { useLangsBuilder } from './langs_builder'
import { usePageLocalesHandler } from './page_locales_handler'
import { useStorageState } from '@/libs/ui/hooks/storage_state'
import { useTemplateTranslation } from './template_translation'

import { useList } from '@/hooks/list'

interface LanguageProviderProps {
  children: ReactElement
  langs: string
  defaultLang: string
}

/**
 * @param props.languages  Available lang codes divided by ","
 */
const LanguageProvider = ( props:LanguageProviderProps ): ReactElement => {

  const { children, langs:languages, defaultLang:defaultLangCode } = props
  const [ languageConfig, setLanguageConfig ] = useStorageState( 'system', 'language' )
  const codeList = useList( languages, ',' )

  // Getting system language
  const getSystemLanguage = useCallback( () => {
    const browserLanguage: string = navigator.language
    const [ languageId ] = browserLanguage.split( '-' ) as [ string, string ]
    return languageId
  }, [] )

  // Getting language code based on provided config
  const code = useMemo<string>( () => {
    let code: string = ( languageConfig === 'system' ) ? getSystemLanguage() : languageConfig
    // Ensuring default language is a valid language
    const defaultWasIncluded: boolean = codeList.indexOf( defaultLangCode ) >= 0
    if( !defaultWasIncluded ) {
      throw new UnexpectedDefaultLanguageError( defaultLangCode )
    }
    // Ensuring selected language is a valid language
    const codeIsInList: boolean = codeList.indexOf( code ) >= 0
    if( !codeIsInList ) {
      console.warn( `Bad language config. Using default (${ defaultLangCode }) instead` )
      code = defaultLangCode
    }
    return code
  }, [ getSystemLanguage, languageConfig, codeList, defaultLangCode ] )

  useDocLanguage( code )
  const { pageLocales, addPage, quitPage } = usePageLocalesHandler()
  const lang = useLangsBuilder( pageLocales, code )
  const t = useTemplateTranslation( lang )
  const tools:LanguageTools = { t, language:code, languageConfig, setLanguage:setLanguageConfig }

  return (
    <LanguageContext.Provider value={ { tools, addPage, quitPage } }>
      { children }
    </LanguageContext.Provider>
  )

}

export default LanguageProvider
