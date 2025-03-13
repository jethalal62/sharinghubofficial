import { useState } from 'react'

export default function VideoCategoryFilter({ categories }) {
  const [selectedCategory, setSelectedCategory] = useState('all')

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      <button
        onClick={() => setSelectedCategory('all')}
        className={`px-4 py-2 rounded ${selectedCategory === 'all' ? 'bg-blue-500' : 'bg-gray-500'} text-white`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-2 rounded ${selectedCategory === category ? 'bg-blue-500' : 'bg-gray-500'} text-white`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
