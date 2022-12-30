import type { AppProps } from "next/app"
import Head from "next/head"
import Layout from "../layout"
import "../styles/globalStyles.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Lautaro&apos;s Homepage</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
