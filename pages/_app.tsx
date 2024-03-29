import type { AppProps } from "next/app"
import Head from "next/head"
import Layout from "../layout"
import "../styles/globalStyles.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Lautaro&apos;s Homepage</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
