import Content from './components/Content'
import DocsLayout from './components/DocsLayout'
import NotFound from '@/pages/NotFound'
import Title from '@/components/Title'
import { data } from './data'
import { ReactElement, useEffect, useMemo } from 'react'
import { useLanguage } from '@/hooks/language'
import { useNavigate, useParams } from 'react-router-dom'

const Docs = (): ReactElement | null => {

  const { topic } = useParams()
  const navigate = useNavigate()
  const { t } = useLanguage()

  // Redirecting to first doc page by default
  useEffect( () => {
    if( topic !== undefined ) { return }
    const [ firstPage ] = data
    const firstPageTarget: string | undefined = firstPage?.target
    if( typeof firstPageTarget === 'string' ) { navigate( `/docs/${ firstPageTarget }` ) }
  }, [ topic, navigate ] )

  // Reading requested doc page
  const page = useMemo( () => {
    if( topic === undefined ) { return undefined }
    for( const thisData of data ) {
      if( thisData.target === topic ) { return thisData }
    }
  }, [ topic ] )

  if( topic === undefined ) {
    return null
  }

  if( page === undefined ) {
    return <NotFound />
  }

  return (
    <DocsLayout>
      <Title>{ t( page.title ) } | Drawing Docs </Title>
      <Content>{ page }</Content>
    </DocsLayout>
  )

}

export default Docs
