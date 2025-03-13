import { useState, useEffect } from 'react'
import supabaseClient from '../utils/supabaseClient'

export default function SearchSuggestions({ searchTerm, onSelect }) {
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
    <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg p-2">
      {suggestions.map((item, index) => (
        <div
          key={index}
          className="p-2 hover:bg-gray-100 cursor-pointer rounded"
          onClick={() => onSelect(item)}
        >
          {item.title} ({item.type})
        </div>
      ))}
    </div>
  )
}
