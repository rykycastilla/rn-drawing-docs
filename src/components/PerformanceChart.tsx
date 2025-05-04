import { Bar } from 'react-chartjs-2'
import { BarElement, Chart as ChartJS, CategoryScale, Legend, LinearScale, Title, Tooltip } from 'chart.js'
import { ReactElement, useEffect, useState } from 'react'
import { useTheme } from '@/libs/ui/hooks/theme'

ChartJS.register( CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend )

interface UseDataResult {
  labels: string[]
  labelsData: number[]
}

function useData( data:Record<string,number> ): UseDataResult {

  const [ labels, setLabels ] = useState<string[]>( [] )
  const [ labelsData, setLabelsData ] = useState<number[]>( [] )

  useEffect( () => {
    const labels: string[] = Object.keys( data )
    const labelsData: number[] = []
    for( const labelName of labels ) {
      const labelData: number = data[ labelName ]!
      labelsData.push( labelData )
    }
    setLabels( labels )
    setLabelsData( labelsData )
  }, [ JSON.stringify( data ) ] )  // eslint-disable-line

  return { labels, labelsData }

}

interface PerformanceChartProps {
  data: Record<string,number>
}

const PerformanceChart = ( props:PerformanceChartProps ): ReactElement => {

  const { data } = props
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'
  const { labels, labelsData } = useData( data )

  const structuredData = {
    labels,
    datasets: [
      {
        label: 'FPS',
        data: labelsData,
        backgroundColor: isDark ? 'rgba(255, 105, 180, 0.8)' : 'rgba(74, 222, 128, 0.8)',
        borderColor: isDark ? 'rgb(255, 105, 180)' : 'rgb(74, 222, 128)',
        borderWidth: 1,
        borderRadius: 6,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: isDark ? '#fff' : '#000',
          boxWidth: window.innerWidth < 768 ? 10 : 15,
          font: {
            size: window.innerWidth < 768 ? 10 : 12,
          },
        },
      },
      title: {
        display: true,
        text: 'Rendimiento en FPS por escenario',
        color: isDark ? '#fff' : '#000',
        font: {
          size: window.innerWidth < 768 ? 14 : 16,
          weight: 'bold' as const,
        },
        padding: {
          bottom: window.innerWidth < 768 ? 5 : 10,
        },
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
        callbacks: {
          label: ( context:{ raw:unknown } ) => `FPS: ${ context.raw }`,
        },
      },
    },
    scales: {
      y: {
        min: 0,
        max: 60,
        ticks: {
          color: isDark ? '#ccc' : '#666',
          stepSize: 10,
          callback: ( value:unknown ) => `${ value } FPS`,
          font: {
            size: window.innerWidth < 768 ? 9 : 11,
          },
        },
        grid: {
          color: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        },
        title: {
          display: true,
          text: 'FPS',
          color: isDark ? '#ccc' : '#666',
          font: {
            size: window.innerWidth < 768 ? 10 : 12,
          },
        },
      },
      x: {
        ticks: {
          color: isDark ? '#ccc' : '#666',
          font: {
            size: window.innerWidth < 768 ? 9 : 11,
          },
        },
        grid: {
          color: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
    interaction: {
      mode: 'nearest' as const,
      axis: 'x' as const,
      intersect: false,
    },
  }

  return <Bar options={ options } data={ structuredData } />

}

export default PerformanceChart
