import { Lang } from './Lang'
import { useCallback, useEffect, useState } from 'react'

export function useLangsBuilder( pages:Set<string>, langCode:string ): Lang {

  const [ lang, setLang ] = useState<Lang>( {} )

  const loadLangPage = useCallback( async( page:string, lang:Lang, isStoped:{ value:boolean } ) => {
    const imported = await import( `@/locales/${ langCode }/${ page }.json` )
    const langSection: Lang = imported.default
    console.log( langSection )
    if( isStoped.value ) { return }
    Object.assign( lang, langSection )
    setLang( { ...lang } )
  }, [ langCode ] )

  useEffect( () => {
    const lang: Lang = {}
    const isStoped = { value:false }
    for( const page of pages ) {
      loadLangPage( page, lang, isStoped )
      if( isStoped.value ) { break }
    }
    return () => { isStoped.value = true }
  }, [ pages, loadLangPage ] )

  return lang

}
