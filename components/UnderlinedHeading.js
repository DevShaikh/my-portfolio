import { Heading } from '@chakra-ui/layout'

const UnderlinedHeading = ({ children }) => {
  return (
    <Heading
      size='lg'
      mb='4'
      color='blackAlpha.900'
      display='inline-block'
      position='relative'
      py='2'
      _after={{
        content: '""',
        width: '35%',
        height: '3px',
        background: '#C53030',
        position: 'absolute',
        left: '0',
        bottom: '0',
      }}
    >
      {children}
    </Heading>
  )
}

export default UnderlinedHeading
