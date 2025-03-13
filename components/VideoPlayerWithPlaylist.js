import VideoPlayer from './VideoPlayer'
import { useState, useEffect } from 'react'
import supabaseClient from '../utils/supabaseClient'

export default function VideoPlayerWithPlaylist({ videoId }) {
  const [playlist, setPlaylist] = useState([])

  useEffect(() => {
    const loadPlaylist = async () => {
      const { data, error } = await supabaseClient
        .from('videos')
        .select('*')
        .eq('playlist_id', videoId)
        .order('episode')

      if (data) setPlaylist(data)
      if (error) console.error('Error loading playlist:', error)
    }
    loadPlaylist()
  }, [videoId])

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Playlist</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {playlist.map((video) => (
          <div key={video.id}>
            <VideoPlayer
              streamhgUrl={video.streamhg_url}
              rpmshareUrl={video.rpmshare_url}
            />
            <h3 className="text-lg font-semibold mt-2">{video.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
