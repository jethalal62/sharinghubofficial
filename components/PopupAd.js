import { useState } from 'react'

export default function PopupAd() {
  const [showPopup, setShowPopup] = useState(true)

  if (!showPopup) return null

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg max-w-md w-full">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold">Advertisement</h2>
          <button
            onClick={() => setShowPopup(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <div className="w-full h-64 flex items-center justify-center">
          <img
            src="/ads/banner-ad.png"
            alt="Advertisement"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  )
}
