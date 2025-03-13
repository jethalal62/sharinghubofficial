import { useState, useEffect } from 'react'
import supabaseClient from '../utils/supabaseClient'

export default function HomePageHero() {
  const [latestContent, setLatestContent] = useState([])

  useEffect(() => {
    const loadLatestContent = async () => {
      const { data, error } = await supabaseClient
        .from('videos')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(12)

      if (data) setLatestContent(data)
      if (error) console.error('Error loading content:', error)
    }
    loadLatestContent()
  }, [])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Latest Content</h1>
      <ContentGrid contents={latestContent} />
    </div>
  )
}
