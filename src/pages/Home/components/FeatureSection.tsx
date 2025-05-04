import AnimatedMockup from '@/components/AnimatedMockup'
import { ReactElement } from 'react'
import { useTheme } from '@/libs/ui/hooks/theme'

interface ImagePlaceholderProps {
  image: string
  borderColor: string
}

const ImagePlaceholder = ( props:ImagePlaceholderProps ): ReactElement => {
  const { image, borderColor } = props
  return (
    <div className="flex justify-center">
      <AnimatedMockup>
        <div
          className="w-full h-full border-2 border-dashed rounded-xl flex items-center justify-center"
          style={ { borderColor } }>
          <img src={ image } />
        </div>
      </AnimatedMockup>
    </div>
  )
}

interface TextContentProps {
  title: string
  description: string
}

const TextContent = ( props:TextContentProps ): ReactElement => {
  const { title, description } = props
  return (
    <div className="flex flex-col justify-center">
      <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4">{ title }</h3>
      <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300">{ description }</p>
    </div>
  )
}

interface FeatureSectionProps {
  title: string
  description: string
  lightPreview: string
  darkPreview: string
  imagePosition: 'left' | 'right'
  color: string
}

const FeatureSection = ( props:FeatureSectionProps ): ReactElement => {

  const { title, description, lightPreview, darkPreview, imagePosition, color } = props
  const { resolvedTheme } = useTheme()
  const isDark: boolean = resolvedTheme === 'dark'
  const preview: string = isDark ? darkPreview : lightPreview
  const borderColor = isDark && color === '#1A1A1A' ? '#FFFFFF' : color

  return (
    <div className="mb-24 last:mb-0">
      <div
        className={
          `grid grid-cols-[1fr_1fr] gap-4 md:gap-8
          ${ ( imagePosition === 'right' ) ? 'md:grid-cols-[1.5fr_1fr]' : 'md:grid-cols-[1fr_1.5fr]' }`
        }>
        { ( imagePosition === 'left' ) && <ImagePlaceholder image={ preview } borderColor={ borderColor } /> }
        <TextContent title={ title } description={ description } />
        { ( imagePosition === 'right' ) && <ImagePlaceholder image={ preview } borderColor={ borderColor } /> }
      </div>
    </div>
  )

}

export default FeatureSection
