import { LegendContext } from './context'
import { ReactElement, useState } from 'react'

interface LegendProviderProps {
  children: ReactElement[] | ReactElement
}

const LegendProvider = ( props:LegendProviderProps ): ReactElement => {
  const { children } = props
  const [ legendIdList, setLegendIdList ] = useState<string[]>( [] )
  const [ legendIndex, setLegendIndex ] = useState<Record<string,string>>( {} )
  return (
    <LegendContext.Provider value={ { legendIdList, setLegendIdList, legendIndex, setLegendIndex } }>
      { children }
    </LegendContext.Provider>
  )
}

export default LegendProvider
