import Link from 'next/link'

export default function MobileMenu() {
  return (
    <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-800 p-4">
      <div className="flex flex-col space-y-2">
        <Link href="/movies" className="text-white hover:text-gray-300">
          Movies
        </Link>
        <Link href="/tvshows" className="text-white hover:text-gray-300">
          TV Shows
        </Link>
        <Link href="/anime" className="text-white hover:text-gray-300">
          Anime
        </Link>
        <Link href="/adult" className="text-white hover:text-gray-300">
          Adult
        </Link>
      </div>
    </div>
  )
}
