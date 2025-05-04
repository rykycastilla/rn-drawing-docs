import { ReactElement, SVGProps } from 'react'

const TapeIcon = ( props:SVGProps<SVGSVGElement> ): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      { ...props }>
      <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M6 12c0 -1.5 .5 -3 1.5 -4c.9 -1 2.1 -1.5 3.5 -1.5s2.6 .5 3.5 1.5c.9 1 1.5 2.5 1.5 4s-.6 3 -1.5 4c-.9 1 -2.1 1.5 -3.5 1.5s-2.6 -.5 -3.5 -1.5c-.9 -1 -1.5 -2.5 -1.5 -4z" />
      <path d="M3 7l3 -3l6 6" />
      <path d="M15 9l6 6l-3 3" />
    </svg>
  )
}

export default TapeIcon
