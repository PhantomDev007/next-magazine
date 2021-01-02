import App from 'next/app'
import type { AppProps, AppContext } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { fetchAPI } from '@lib/api'
import { Layout } from '@components/core'
import '@styles/main.css'
// import '@styles/tailwind.css'
import 'tailwindcss/base.css'
import 'tailwindcss/components.css'
import 'tailwindcss/utilities.css'
import '@styles/base.css'
import '@styles/components.css'
import '@styles/utilities.css'
import Head from '@components/core/head'

type Props = {
  categories: TCategory[]
  pages: TPage[]
}

function MyApp({ Component, pageProps }: AppProps) {
  const { categories, pages }: Props = pageProps

  return (
    <ThemeProvider>
      <Head />

      <Layout categories={categories} pages={pages}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)

  // Fetch global site data
  const categories = await fetchAPI('/categories')
  const pages = await fetchAPI('/pages')

  return { ...appProps, pageProps: { categories, pages } }
}

export default MyApp
