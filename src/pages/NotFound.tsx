import Title from '@/components/Title'
import { Button } from '@/libs/ui/button'
import { Home } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ReactElement } from 'react'
import { useLanguage } from '@/hooks/language'

const Error404 = (): ReactElement => {
  return (
    <h1 className="text-[6rem] md:text-[15rem] font-extrabold tracking-tight text-pink-500 dark:text-pink-400 leading-none">
      404
    </h1>
  )
}

const HomeButton = (): ReactElement => {
  const { t } = useLanguage()
  return (
    <div className="flex justify-center mb-10 md:mb-20">
      <Button asChild size="default" className="bg-pink-500 hover:bg-pink-600 text-white">
        <Link to="/" className="flex items-center gap-2">
          <Home className="h-4 w-4 md:h-5 md:w-5" />
          <span>{ t( 'come-home' ) }</span>
        </Link>
      </Button>
    </div>
  )
}

const NotFound = (): ReactElement => {
  const { t } = useLanguage()
  return (
    <>
      <Title>{ t( 'page-not-found-title' ) }</Title>
      <div className="error-page flex flex-col items-center justify-center pt-10 md:pt-20">
        <div className="container max-w-3xl text-center px-4">
          <div className="mb-6 md:mb-12">
            <Error404 />
          </div>
          <h2 className="text-2xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-3 md:mb-4">
            { t( 'page-not-found-alert' ) }
          </h2>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6 md:mb-8">
            { t( 'page-not-found' ) }
          </p>
          <HomeButton />
        </div>
      </div>
    </>
  )
}

export default NotFound
