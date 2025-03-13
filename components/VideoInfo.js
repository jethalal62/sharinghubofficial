import VideoRating from './VideoRating'

export default function VideoInfo({ title, rating, year, genres }) {
  return (
    <div className="p-4 bg-gray-800 rounded-lg">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div className="flex items-center gap-2 mb-2">
        <VideoRating rating={rating} />
        <span className="text-gray-400">|</span>
        <span className="text-gray-300">{year}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {genres.map((genre) => (
          <span
            key={genre}
            className="px-2 py-1 bg-gray-700 rounded text-sm"
          >
            {genre}
          </span>
        ))}
      </div>
    </div>
  )
}
