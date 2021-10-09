import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layout/Layout'
import '../styles/globals.css'

const MyPortfolio = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Layout>
        <Head>
          <link rel='shortcut icon' href='/a.ico' />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyPortfolio
