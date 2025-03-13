import ContentCard from './ContentCard'

export default function VideoGrid({ videos }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {videos.map((video) => (
        <ContentCard key={video.id} content={video} />
      ))}
    </div>
  )
}
