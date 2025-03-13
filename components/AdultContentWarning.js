import { useState } from 'react'

export default function AdultContentWarning() {
  const [isConfirmed, setIsConfirmed] = useState(false)

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center">
      {!isConfirmed && (
        <div className="bg-white p-4 rounded-lg max-w-md w-full">
          <h2 className="text-xl font-bold mb-2">Adult Content Warning</h2>
          <p className="mb-4">
            You must be 18+ to view this content. Please confirm you are of legal age.
          </p>
          <div className="flex justify-end gap-2">
            <button
              onClick={() => setIsConfirmed(true)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              I am 18+
            </button>
            <button
              onClick={() => window.location.href = '/'}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Go Back
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
