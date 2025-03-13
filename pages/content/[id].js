import { useRouter } from 'next/router'
import supabaseClient from '../../utils/supabaseClient'
import VideoPlayer from '../../components/VideoPlayer'
import ContentCard from '../../components/ContentCard'

const ContentDetails = ({ content }) => {
  if (!content) return <div className="text-center">Content not found</div>

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{content.title}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <VideoPlayer
            streamhgUrl={content.streamhg_url}
            rpmshareUrl={content.rpmshare_url}
          />
          <div className="mt-4 p-4 bg-gray-800 rounded-lg">
            <h2 className="text-xl font-bold mb-2">Description</h2>
            <p className="text-gray-300">{content.description}</p>
          </div>
        </div>
        <div className="lg:col-span-1">
          <h2 className="text-xl font-bold mb-4">More Like This</h2>
          {/* Add more content cards here */}
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.params
  const { data, error } = await supabaseClient
    .from('videos')
    .select('*')
    .eq('id', id)
    .single()

  return {
    props: {
      content: data || null,
    },
  }
}

export default ContentDetails
