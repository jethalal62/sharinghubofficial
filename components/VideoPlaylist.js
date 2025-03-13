import { useState } from 'react'
import VideoPlayer from './VideoPlayer'

export default function VideoPlaylist({ videos }) {
  const [currentVideo, setCurrentVideo] = useState(0)

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Playlist</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {videos.map((video, index) => (
          <div key={video.id}>
            <VideoPlayer
              streamhgUrl={video.streamhg_url}
              rpmshareUrl={video.rpmshare_url}
            />
            <h3 className="text-lg font-semibold mt-2">{video.title}</h3>
            {index < videos.length - 1 && (
              <button
                onClick={() => setCurrentVideo(index + 1)}
                className="mt-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Next Video
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
