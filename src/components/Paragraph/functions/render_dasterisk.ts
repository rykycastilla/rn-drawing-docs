import { DASTERISK, DOUBLE_ASTERISK } from '../constants'

/**
 * Replaces double asterisks in a plain text by DASTERISK char
 */
export function renderDasterisk( text:string ): string {
  return text.replaceAll( DOUBLE_ASTERISK, DASTERISK )
}
