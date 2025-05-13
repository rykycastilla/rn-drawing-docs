import { lazy } from 'react'

const Docs = lazy( () => import( './page' ) )

export default Docs
export { pages } from './models'
