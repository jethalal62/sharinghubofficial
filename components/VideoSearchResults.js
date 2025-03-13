import VideoGrid from './VideoGrid'

export default function VideoSearchResults({ videos }) {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Search Results</h2>
      <VideoGrid videos={videos} />
    </div>
  )
}
