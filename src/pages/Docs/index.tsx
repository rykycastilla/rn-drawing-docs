import Content from './components/Content'
import NotFound from '@/pages/NotFound'
import Title from '@/components/Title'
import { data } from './data'
import { ReactElement, useEffect, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Docs = (): ReactElement | null => {

  const { topic } = useParams()
  const navigate = useNavigate()

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
    <>
      <Title>{ page.title }</Title>
      <Content>{ page }</Content>
    </>
  )

}

export default Docs
