import Document, { Html, Head, Main, NextScript } from 'next/document'

export default function MyDocument() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://unpkg.com/video.js@7/dist/video-js.css"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/@videojs/http-streaming@1/dist/videojs-http-streaming.css"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-gray-900 text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
