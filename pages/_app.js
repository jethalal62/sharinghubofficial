import { SupabaseProvider } from '@supabase/supabase-js'
import { supabaseClient } from '../utils/supabaseClient'
import Navigation from '../components/Navigation'
import PopupAd from '../components/PopupAd'

function MyApp({ Component, pageProps }) {
  return (
    <SupabaseProvider value={supabaseClient}>
      <Navigation />
      <PopupAd />
      <Component {...pageProps} />
    </SupabaseProvider>
  )
}

export default MyApp
