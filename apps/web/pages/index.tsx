import Head from 'next/head'
import Desktop from '../components/Desktop/Desktop'

export default function Web() {
  return (
    <>
      <Head>
        <title>Gary OS</title>
        <meta name="description" content="gOS - Gary OS is Web Application Profile (Gary Ascuy)" />
        <link rel="icon" type="image/png" href="/assets/web/favicon.png" />
      </Head>

      <Desktop />
    </>
  )
}
