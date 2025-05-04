import { createContext } from 'react'

export interface LegendContext {
  legendIdList: string[]
  setLegendIdList( legendIdList:string[] | ( ( legendIdList:string[] ) => string[] ) ): void
  legendIndex: Record<string,string>
  setLegendIndex( legendIndex:Record<string,string> | ( ( legendIndex:Record<string,string> ) => Record<string,string> ) ): void
}

export const LegendContext = createContext( null as unknown as LegendContext )
