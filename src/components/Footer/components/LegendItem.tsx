import { ReactElement } from 'react'

interface LegendItemProps {
  index: number
  children: string
}

const LegendItem = ( props:LegendItemProps ): ReactElement => {
  const { index, children } = props
  return (
    <div className="flex">
      <span className="font-medium mr-2">{ index }</span>
      <p>
        { children }
      </p>
    </div>
  )
}

export default LegendItem
