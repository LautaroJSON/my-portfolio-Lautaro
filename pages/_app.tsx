import Head from "next/head"
import React from "react"
import Layout from "../layout"
import "./globalStyles.css"

const _app = ({ Component, pageProps, router }) => {
  return (
    <Layout>
      <Head>
        <title>Lautaro&apos;s Homepage</title>
      </Head>
      <Component {...pageProps} key={router.route} />
    </Layout>
  )
}

export default _app
