import VideoPlayer from './VideoPlayer'
import VideoInfo from './VideoInfo'
import VideoLikeButton from './VideoLikeButton'
import VideoDownloadButton from './VideoDownloadButton'

export default function VideoPlayerWithInfo({ video }) {
  return (
    <div className="container mx-auto p-4">
      <VideoPlayer
        streamhgUrl={video.streamhg_url}
        rpmshareUrl={video.rpmshare_url}
      />
      <VideoInfo
        title={video.title}
        rating={video.rating}
        year={video.year}
        genres={video.genres}
      />
      <div className="flex gap-2 mt-2">
        <VideoLikeButton videoId={video.id} />
        <VideoDownloadButton videoUrl={video.streamhg_url} />
      </div>
    </div>
  )
}
