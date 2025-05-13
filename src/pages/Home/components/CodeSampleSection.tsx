import Code from '@/components/Code'
import { FootNote } from '@/hooks/foot_note'
import { ReactElement } from 'react'
import { useLanguage } from '@/hooks/language'

const CodeSampleSection = (): ReactElement => {
  const { t } = useLanguage()
  return (
    <section className="py-20 bg-gray-50 dark:bg-secondary">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-10">
          { t( 'code-sample-title' ) }
          <FootNote>{ t( 'only-android-disclaimer' ) }</FootNote>
        </h2>
        <div className="max-w-3xl mx-auto">
          <Code
            language="tsx"
            fileName="App.tsx">
            {
              `import { Draw, Tool } from 'react-native-drawing'
import { ReactElement } from 'react'

const App = (): ReactElement => {
  return (
    <Draw
      resolution={ 720 }
      color="red"
      tool={ Tool.PENCIL }
      onLoad={ () => console.log( 'Ready to Draw!' ) } />
    )
}

export default App
                `
            }
          </Code>
        </div>
      </div>
    </section>
  )
}

export default CodeSampleSection
