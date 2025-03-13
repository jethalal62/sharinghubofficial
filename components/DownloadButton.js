import { useState } from 'react'

export default function DownloadButton({ videoUrl }) {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = () => {
    // Implement download logic
    setIsDownloading(true)
    window.location.href = videoUrl
  }

  return (
    <button
      onClick={handleDownload}
      className="p-2 rounded-full text-white hover:bg-gray-700"
    >
      ↓
    </button>
  )
}
