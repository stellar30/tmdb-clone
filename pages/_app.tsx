import '@/styles/globals.css'
import '@/styles/tabs.css'
import type { AppProps } from 'next/app'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Source_Sans_Pro } from 'next/font/google'
import axios from 'axios'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

import 'dayjs/locale/id'

import Layout from './layout'

const source_sans_pro = Source_Sans_Pro({ weight: ['200', '300', '400', '600', '700', '900'], subsets: ['latin'], preload: true })
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL

dayjs.locale('id')
dayjs.extend(duration)

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        cacheTime: 0
      },
    },
  });

  return (
    <>
    {source_sans_pro.className && (

    <main className={source_sans_pro.className}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </main>
    )}
    </>
  )
}
