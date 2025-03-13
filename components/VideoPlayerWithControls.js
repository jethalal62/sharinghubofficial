import VideoPlayer from './VideoPlayer'
import LikeButton from './LikeButton'
import DownloadButton from './DownloadButton'

export default function VideoPlayerWithControls({ streamhgUrl, rpmshareUrl, contentId, videoUrl }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <VideoPlayer streamhgUrl={streamhgUrl} rpmshareUrl={rpmshareUrl} />
      <div className="flex items-center gap-2">
        <LikeButton contentId={contentId} />
        <DownloadButton videoUrl={videoUrl} />
      </div>
    </div>
  )
}
