import { Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ReactElement } from 'react'
import { useTheme } from '@/libs/ui/hooks/theme'

interface GitHubButtonProps {
  repoOwner: string
  repoName: string
}

const GitHubButton = ( props:GitHubButtonProps ): ReactElement => {

  const { repoOwner, repoName } = props
  const { resolvedTheme } = useTheme()
  const isDark: boolean = resolvedTheme === 'dark'

  return (
    <Link
      to={ `https://github.com/${ repoOwner }/${ repoName }` }
      target="_blank"
      rel="noopener noreferrer"
      className={`
        flex items-center justify-center rounded-full w-10 h-10 
        ${isDark ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-700 border border-gray-200'}
      `}
      aria-label="Ver en GitHub"
      onClick={ ( event ) => event.stopPropagation() }>
      <Github className="h-5 w-5" />
    </Link>
  )

}

export default GitHubButton
