import Link from 'next/link'
import { useState } from 'react'
import MobileMenu from './MobileMenu'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold">
            SHARING HuB
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/movies" className="hover:text-gray-300">
              Movies
            </Link>
            <Link href="/tvshows" className="hover:text-gray-300">
              TV Shows
            </Link>
            <Link href="/anime" className="hover:text-gray-300">
              Anime
            </Link>
            <Link href="/adult" className="hover:text-gray-300">
              Adult
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              ☰
            </button>
          </div>
        </div>
        {isMenuOpen && <MobileMenu />}
      </div>
    </nav>
  )
}
