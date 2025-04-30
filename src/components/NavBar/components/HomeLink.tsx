import { Link } from 'react-router-dom'
import { ReactElement } from 'react'

const HomeLink = (): ReactElement => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img src="/rn_drawing.png" alt="RN Drawing Logo" width={ 28 } height={ 28 } className="h-7 w-7" />
      <span className="text-pink-500 font-bold text-xl hidden md:inline">RN Drawing</span>
    </Link>
  )
}

export default HomeLink
