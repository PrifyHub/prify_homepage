import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Prify</title>
        <link rel="shortcut icon" href="/favprify.png" />
        <meta name="description" content="a simple project from a startup" />
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  )
}

export default MyApp
