import { useEffect, useState } from 'react'
import { Box, Flex } from '@chakra-ui/layout'
import Sidebar from './Sidebar'
import Footer from './Footer'

const Layout = ({ children }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    mounted && (
      <Flex
        id='wrapper'
        flexDirection={['column', 'column', 'row', 'row']}
        background='#f6f6f6'
      >
        <Sidebar />
        <Box
          width={['100%', '100%', '75%', '75%']}
          background='#fff'
          overflowY={['initial', 'initial', 'auto', 'auto']}
          height={['initial', 'initial', '100vh', '100vh']}
        >
          {children}
          <Footer />
        </Box>
      </Flex>
    )
  )
}

export default Layout
