import { useState } from 'react'

export default function VideoLikeButton({ videoId }) {
  const [isLiked, setIsLiked] = useState(false)

  const handleLike = () => {
    setIsLiked(!isLiked)
    // Implement logic to update likes in Supabase
  }

  return (
    <button
      onClick={handleLike}
      className={`px-4 py-2 rounded ${
        isLiked ? 'bg-red-500' : 'bg-gray-500'
      } text-white hover:bg-red-600`}
    >
      {isLiked ? '❤️ Liked' : '❤️ Like'}
    </button>
  )
}
