import { useState } from 'react'

export default function VideoDownloadButton({ videoUrl }) {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = () => {
    setIsDownloading(true)
    window.location.href = videoUrl
  }

  return (
    <button
      onClick={handleDownload}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      {isDownloading ? 'Downloading...' : 'Download Video'}
    </button>
  )
}
