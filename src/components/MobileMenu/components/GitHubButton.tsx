import { Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ReactElement } from 'react'

interface GitHubButtonProps {
  repoOwner: string
  repoName: string
  close(): void
}

const GitHubButton = ( props:GitHubButtonProps ): ReactElement => {
  const { repoOwner, repoName, close } = props
  return (
    <Link
      to={ `https://github.com/${ repoOwner }/${ repoName }` }
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
      onClick={ close }>
      <Github className="h-5 w-5" />
      <span className="font-medium">GitHub</span>
    </Link>
  )
}

export default GitHubButton
