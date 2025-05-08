import { DASTERISK } from '../constants'

type SectionInfo = 'type' | 'opening' | 'ending'

const sectionTypes = [ 'inline-code', 'foot-note', 'bold', 'italic' ]
const sectionOpenings = [ '`', '[', DASTERISK, '*' ]
const sectionEndings = [ '`', ']', DASTERISK, '*' ]

const sectionInfo = {
  [ 'type' ]: sectionTypes,
  [ 'opening' ]: sectionOpenings,
  [ 'ending' ]: sectionEndings,
}

/**
 * Based on the entry gets the equivalent information of the parsing rules.
 * You have to specify the type of the entry provided (from) to get the equivalent data (to)
 */
export function getSectionInfo( entry:string, from:SectionInfo, to:SectionInfo ): string | null {
  const fromData: string[] = sectionInfo[ from ],
    toData = sectionInfo[ to ]
  const index: number = fromData.indexOf( entry )
  const output: string | undefined = toData[ index ]
  return output ?? null
}
