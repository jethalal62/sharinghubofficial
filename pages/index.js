import { useState, useEffect } from 'react'
import supabaseClient from '../utils/supabaseClient'
import ContentCard from '../components/ContentCard'
import Search from '../components/Search'

const HomePage = () => {
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
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">SHARING HuB</h1>
        <Search />
      </div>
      <h2 className="text-2xl font-bold mb-4">Latest Content</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {latestContent.map((content) => (
          <ContentCard key={content.id} content={content} />
        ))}
      </div>
    </div>
  )
}

export default HomePage
