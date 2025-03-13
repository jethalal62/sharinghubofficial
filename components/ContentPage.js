import { useState, useEffect } from 'react'
import supabaseClient from '../utils/supabaseClient'
import VideoPlayer from './VideoPlayer'
import LikeButton from './LikeButton'
import DownloadButton from './DownloadButton'

export default function ContentPage({ contentId }) {
  const [content, setContent] = useState({})

  useEffect(() => {
    const loadContent = async () => {
      const { data, error } = await supabaseClient
        .from('videos')
        .select('*')
        .eq('id', contentId)
        .single()

      if (data) setContent(data)
      if (error) console.error('Error loading content:', error)
    }
    loadContent()
  }, [contentId])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{content.title}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <VideoPlayer
            streamhgUrl={content.streamhg_url}
            rpmshareUrl={content.rpmshare_url}
          />
          <div className="mt-4 p-4 bg-gray-800 rounded-lg">
            <h2 className="text-xl font-bold mb-2">Description</h2>
            <p className="text-gray-300">{content.description}</p>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <LikeButton contentId={content.id} />
            <DownloadButton videoUrl={content.streamhg_url} />
          </div>
        </div>
        <div className="lg:col-span-1">
          <h2 className="text-xl font-bold mb-4">More Like This</h2>
          {/* Add more content cards here */}
        </div>
      </div>
    </div>
  )
}
