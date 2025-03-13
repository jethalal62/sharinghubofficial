import { useState } from 'react'

export default function VideoRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      <span className="text-yellow-500">★</span>
      <span className="font-semibold">{rating}</span>
      <span className="text-gray-400">/10</span>
    </div>
  )
}
