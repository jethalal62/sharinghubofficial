import { useState } from 'react'
import VideoSearchResults from './VideoSearchResults'

export default function VideoSearchBar() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="container mx-auto p-4">
      <input
        type="text"
        placeholder="Search videos..."
        className="w-full p-2 rounded-lg border border-gray-300"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm && <VideoSearchResults videos={[]=} />}
    </div>
  )
}
