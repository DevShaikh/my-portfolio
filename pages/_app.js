import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layout/Layout'
import '../styles/globals.css'

const MyPortfolio = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyPortfolio
