import { useState } from 'react'

export default function VideoSearchFilter({ onFilter }) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
    onFilter(e.target.value)
  }

  return (
    <input
      type="text"
      placeholder="Search videos..."
      className="w-full p-2 rounded-lg border border-gray-300"
      value={searchTerm}
      onChange={handleSearch}
    />
  )
}
