import Bold from '../components/Bold'
import InlineCode from '../components/InlineCode'
import Italic from '../components/Italic'
import { FootNote } from '@/hooks/foot_note'
import { ReactElement, ReactNode } from 'react'

export type Section = 'inline-code' | 'foot-note' | 'bold' | 'italic'

interface SectionComponent {
  ( props:{ children:string } ): ReactElement
}

const sectionIndex: Record<Section,SectionComponent> = {
  [ 'inline-code' ]: InlineCode,
  [ 'foot-note' ]: FootNote,
  [ 'bold' ]: Bold,
  [ 'italic' ]: Italic,
}

/**
 * Creates a react element based on the type of the section to render and its content
 */
export function renderSection( rendered:ReactNode[], content:string, type?:Section ) {
  if( type === undefined ) {
    rendered.push( content )
    return
  }
  const Section: SectionComponent = sectionIndex[ type ]
  const renderedSection: ReactElement = <Section key={ rendered.length }>{ content }</Section>
  rendered.push( renderedSection )
}
