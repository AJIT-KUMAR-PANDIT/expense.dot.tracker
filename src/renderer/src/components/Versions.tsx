import { useState, useEffect } from 'react'

// Type definition for versions
interface Versions {
  electron: string
  chrome: string
  node: string
}

function Versions(): JSX.Element {
  const [versions, setVersions] = useState<Versions>({
    electron: '',
    chrome: '',
    node: ''
  })
  const [error, setError] = useState<string>('')

  useEffect(() => {
    try {
      // Check if window.electron exists
      if (!window.electron?.process?.versions) {
        throw new Error('Electron process versions not available')
      }

      setVersions(window.electron.process.versions)
    } catch (err) {
      setError('Failed to load versions')
      console.error('Error loading versions:', err)
    }
  }, [])

  if (error) {
    return <div className="text-red-600 p-4">{error}</div>
  }

  return (
    <ul className="space-y-2 p-4 rounded-lg bg-gray-100">
      <li className="flex items-center space-x-2">
        <span className="font-medium">Electron:</span>
        <span className="text-blue-600">v{versions.electron}</span>
      </li>
      <li className="flex items-center space-x-2">
        <span className="font-medium">Chromium:</span>
        <span className="text-green-600">v{versions.chrome}</span>
      </li>
      <li className="flex items-center space-x-2">
        <span className="font-medium">Node:</span>
        <span className="text-purple-600">v{versions.node}</span>
      </li>
    </ul>
  )
}

// Add window.electron type declaration
declare global {
  interface Window {
    electron?: {
      process: {
        versions: Versions
      }
    }
  }
}

export default Versions
