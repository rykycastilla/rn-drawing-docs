import { Prism } from 'react-syntax-highlighter'
import { ReactElement } from 'react'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface SyntaxHighlighterProps {
  language: string
  isFullScreen: boolean
  thereIsPreview: boolean
  children: string
}

const SyntaxHighlighter = ( props:SyntaxHighlighterProps ): ReactElement => {
  const { language, isFullScreen, thereIsPreview, children } = props
  return (
    <Prism
      language={ language }
      style={ vscDarkPlus }
      showLineNumbers
      customStyle={ {
        margin: 0,
        fontSize: '14px',
        backgroundColor: '#1a2035',
        flexGrow: 1,
        height: isFullScreen
          ? '100%'
        // Using auto height for code examples without preview
          : !thereIsPreview ? undefined : '450px',
      } }>
      { children }
    </Prism>
  )
}

export default SyntaxHighlighter
