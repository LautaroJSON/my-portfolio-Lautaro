import Head from "next/head"
import React from "react"
import "./globalStyles.css"
import Layout from "../layout"

function App({ Component, pageProps, router }) {
  return (
    <Layout>
      <Head>
        <title>Lautaro&apos;s Homepage</title>
      </Head>
      <Component {...pageProps} key={router.route} />
    </Layout>
  )
}

export default App
