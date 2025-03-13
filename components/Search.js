import { useState, useEffect } from 'react'
import supabaseClient from '../utils/supabaseClient'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    if (searchTerm.length > 0) {
      const loadSuggestions = async () => {
        const { data, error } = await supabaseClient
          .from('videos')
          .select('title, type')
          .ilike('title', `%${searchTerm}%`)
          .limit(5)

        if (data) setSuggestions(data)
        if (error) console.error('Search error:', error)
      }
      loadSuggestions()
    } else {
      setSuggestions([])
    }
  }, [searchTerm])

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search movies, series, anime..."
        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {suggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg p-2">
          {suggestions.map((item, index) => (
            <div
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer rounded"
              onClick={() => {
                // Handle click on suggestion
              }}
            >
              {item.title} ({item.type})
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Search
