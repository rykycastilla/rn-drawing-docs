import { lazy } from 'react'

const Home = lazy( () => import( './page' ) )

export default Home
export { default as HomeLayout } from './layout'
