import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import '@videojs/http-streaming'

const VideoPlayer = ({ streamhgUrl, rpmshareUrl }) => {
  const playerRef = React.useRef(null)

  React.useEffect(() => {
    if (playerRef.current) {
      const player = videojs(playerRef.current, {
        controls: true,
        responsive: true,
        playbackRates: [0.5, 1, 1.5, 2],
        sources: [
          {
            type: 'video/mp4',
            src: streamhgUrl || rpmshareUrl,
          },
        ],
      })

      player.on('play', () => {
        console.log('Video started playing')
      })

      return () => {
        player.dispose()
      }
    }
  }, [streamhgUrl, rpmshareUrl])

  return (
    <div className="w-full h-[500px] bg-black">
      <video
        ref={playerRef}
        className="video-js vjs-default-skin vjs-big-play-centered"
        width="100%"
        height="100%"
      />
    </div>
  )
}

export default VideoPlayer
