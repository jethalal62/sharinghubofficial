import { useState, useEffect } from 'react'
import supabaseClient from '../utils/supabaseClient'
import VideoGrid from './VideoGrid'

export default function VideoSearch({ searchTerm }) {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    if (searchTerm.length > 0) {
      const loadVideos = async () => {
        const { data, error } = await supabaseClient
          .from('videos')
          .select('*')
          .ilike('title', `%${searchTerm}%`)
          .order('title')

        if (data) setVideos(data)
        if (error) console.error('Search error:', error)
      }
      loadVideos()
    } else {
      setVideos([])
    }
  }, [searchTerm])

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Search Results</h2>
      <VideoGrid videos={videos} />
    </div>
  )
}
