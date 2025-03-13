import Image from 'next/image'

export default function Ads() {
  return (
    <div className="w-full mb-4">
      <Image
        src="/ads/banner-ad.png"
        alt="Banner Ad"
        className="w-full h-auto rounded-lg"
      />
    </div>
  )
}
