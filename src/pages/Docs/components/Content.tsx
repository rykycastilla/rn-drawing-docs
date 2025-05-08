import Code from '@/components/Code'
import Info from './Info'
import Paragraph from '@/components/Paragraph'
import Subtitle from './Subtitle'
import Title from './Title'
import Warning from './Warning'
import { CodeComponent, Component, PageStructure, TextComponent } from '../models'
import { ReactElement, useMemo } from 'react'

function isCodeComp( comp:Component ): comp is CodeComponent {
  return comp.type === 'code'
}

/**
 * Manages optional rendering of possible code components
 */
function renderCodeComp( comp:Component, renderedContent:ReactElement[] ) {
  if( isCodeComp( comp ) ) {
    const { code, language, fileName, maximizable, preview } = comp
    const key: number = renderedContent.length
    const rendered = (
      <Code
        key={ key }
        language={ language }
        fileName={ fileName }
        maximizable={ maximizable }
        preview={ preview }>
        { code }
      </Code>
    )
    renderedContent.push( rendered )
  }
}

function compareTextComp( component:Component, type:TextComponent[ 'type' ] ): component is TextComponent {
  return component.type === type
}

/**
 * Manages optional rendering of possible text components
 */
function renderTextComp( comp:Component, renderedContent:ReactElement[] ) {
  let rendered: ReactElement | undefined
  const key: number = renderedContent.length
  if( compareTextComp( comp, 'subtitle' ) ) {
    rendered = <Subtitle key={ key }>{ comp.text }</Subtitle>
  }
  else if( compareTextComp( comp, 'info' ) ) {
    rendered = <Info key={ key }>{ comp.text }</Info>
  }
  else if( compareTextComp( comp, 'warning' ) ) {
    rendered = <Warning key={ key }>{ comp.text }</Warning>
  }
  else if( compareTextComp( comp, 'p' ) ) {
    rendered = <Paragraph key={ key }>{ comp.text }</Paragraph>
  }
  if( rendered !== undefined ) { renderedContent.push( rendered ) }
}

interface ContentProps {
  children: PageStructure
}

const Content = ( props:ContentProps ): ReactElement => {

  const { children } = props
  const { title, content } = children

  // Rendering page content based on the data structure provided
  const renderedContent = useMemo( () => {
    const renderedContent: ReactElement[] = []
    for( let i = 0; i < content.length; i++ ) {
      const comp: Component = content[ i ]!
      renderCodeComp( comp, renderedContent )
      renderTextComp( comp, renderedContent )
    }
    return renderedContent
  }, [ content ] )

  return (
    <>
      <Title>{ title }</Title>
      { renderedContent }
    </>
  )

}

export default Content
