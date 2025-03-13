import Link from 'next/link'
import Image from 'next/image'

const ContentCard = ({ content }) => {
  return (
    <div className="relative group cursor-pointer transition-transform hover:scale-105">
      <Link href={`/content/${content.id}`}>
        <Image
          src={content.thumbnail}
          alt={content.title}
          className="w-full h-full object-cover rounded-lg"
          width={300}
          height={450}
        />
      </Link>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
        <h3 className="text-white font-semibold text-lg truncate">{content.title}</h3>
        <p className="text-sm text-gray-200">{content.type}</p>
      </div>
    </div>
  )
}

export default ContentCard
