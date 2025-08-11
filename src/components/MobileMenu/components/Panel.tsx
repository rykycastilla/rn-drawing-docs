import { ReactElement } from 'react'

interface PanelProps {
  isOpen: boolean
  children?: ReactElement[] | ReactElement
  close(): void
}

const Panel = ( props:PanelProps ): ReactElement => {
  const { isOpen, close, children } = props
  return (
    <>
      { /* Overlay */ }
      <div
        className={`fixed w-screen h-screen inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={ close } />
      { /* Panel */ }
      <div
        className={`fixed top-0 left-0 right-0 bg-background border-b z-50 shadow-lg transition-transform duration-300 transform rounded-b-lg max-h-[100vh] overflow-scroll ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        data-mobile-menu>
        <div className="container py-4">{ children }</div>
      </div>
    </>
  )
}

export default Panel
