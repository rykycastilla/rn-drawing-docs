import LegendItem from './LegendItem'
import { ReactElement } from 'react'

interface FootNote {
  numericalReference: number
  description: string
}

interface LegendItemProps {
  footNoteList: FootNote[]
}

const LegendItemList = ( props:LegendItemProps ): ReactElement => {
  const { footNoteList } = props
  const legendItemList: ReactElement[] = []
  for( const footNote of footNoteList ) {
    const { numericalReference, description } = footNote
    const legendItem: ReactElement = (
      <LegendItem key={ numericalReference } index={ numericalReference }>
        { description }
      </LegendItem>
    )
    legendItemList.push( legendItem )
  }
  return <>{ legendItemList }</>
}

interface LegendProps {
  footNoteList: FootNote[]
}

const Legend = ( props:LegendProps ): ReactElement => {
  const { footNoteList } = props
  return (
    <div className="border-t border-gray-200 dark:border-gray-800 py-4">
      <div className="container">
        <div className="text-xs text-gray-500 dark:text-gray-400 space-y-2">
          <LegendItemList footNoteList={ footNoteList } />
        </div>
      </div>
    </div>
  )
}

export default Legend
