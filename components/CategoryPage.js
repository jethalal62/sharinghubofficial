import { useState, useEffect } from 'react'
import supabaseClient from '../utils/supabaseClient'
import ContentGrid from './ContentGrid'

export default function CategoryPage({ category }) {
  const [contents, setContents] = useState([])

  useEffect(() => {
    const loadContents = async () => {
      const { data, error } = await supabaseClient
        .from('videos')
        .select('*')
        .eq('type', category)
        .order('created_at', { ascending: false })

      if (data) setContents(data)
      if (error) console.error('Error loading content:', error)
    }
    loadContents()
  }, [category])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{category} Content</h1>
      <ContentGrid contents={contents} />
    </div>
  )
}
