import { ReactNode, useMemo } from 'react'
import { getSectionInfo } from '../functions/get_section_info'
import { renderDasterisk } from '../functions/render_dasterisk'
import { renderSection, Section } from '../functions/render_section'

function renderParagraph( paragraph:string ): ReactNode[] {
  // Replacing double asterisks by dasterisk char to parse bold sections
  const dasteriskzedParagraph = renderDasterisk( paragraph )
  const rendered: ReactNode[] = []
  let sectionType: Section | null = null
  let sectionContent = ''
  for( const char of dasteriskzedParagraph ) {
    // Parsing paragraph body (out of a section)
    if( sectionType === null ) {
      const type: string | null = getSectionInfo( char, 'opening', 'type' )
      // Is a section opening
      if( type !== null ) {
        renderSection( rendered, sectionContent )
        sectionContent = ''
        sectionType = type as Section
      }
      else {
        sectionContent += char
      }
    }
    // Parsing a section
    else {
      const ending: string = getSectionInfo( sectionType, 'type', 'ending' )!
      if( char === ending ) {
        renderSection( rendered, sectionContent, sectionType )
        sectionContent = ''
        sectionType = null
      }
      else {
        sectionContent += char
      }
    }
  }
  // Rendering paragraph ending (saved on sectionContent)
  renderSection( rendered, sectionContent )
  return rendered
}

/**
 * Creates a react renderizable array from a paragraph template, usin its patterns to provide text decorations
 * Patterns for text decoration
 * - inline code: ``
 * - foot note: []
 * - bold: ****
 * - italic: **
 */
export function useParagraphRenderer( paragraph:string ): ReactNode[] {
  return useMemo( () => {
    return renderParagraph( paragraph )
  }, [ paragraph ] )
}
