import { useState } from 'react'

export default function LikeButton({ contentId }) {
  const [isLiked, setIsLiked] = useState(false)

  const handleLike = async () => {
    // Implement logic to update likes in Supabase
    setIsLiked(!isLiked)
  }

  return (
    <button
      onClick={handleLike}
      className={`p-2 rounded-full ${isLiked ? 'text-red-500' : 'text-white'}`}
    >
      ♥
    </button>
  )
}
