import Head from 'next/head'
import {
  Box,
  Flex,
  Heading,
  ListItem,
  OrderedList,
  Text,
} from '@chakra-ui/layout'

import { MdEmail } from 'react-icons/md'
import { AiFillFacebook, AiFillLinkedin } from 'react-icons/ai'
import { FaGithubSquare } from 'react-icons/fa'
import UnderlinedHeading from '../components/UnderlinedHeading'

const contact = () => {
  return (
    <Box pt='6' pb='10' px='10' minHeight='92.5vh'>
      <Head>
        <link rel='shortcut icon' href='/logo-large.png' />
        <title>Portfolio | Contact</title>
      </Head>

      <Box mb='4'>
        <UnderlinedHeading>ABOUT ME</UnderlinedHeading>
        <Text>
          Hi, I am a Junior Full stack Developer having experience of around 3
          year of building web apps that just work across all platforms and
          browsers mainly using JavaScript with its frameworks and many other
          modern tools and technologies with the most latest techniques.
        </Text>
      </Box>

      <Box mb='4'>
        <UnderlinedHeading>CONTACT</UnderlinedHeading>
        <Text>
          I am available for hire and open to any ideas of cooperation.
        </Text>
      </Box>
      <Box>
        <OrderedList listStyleType='none' margin='0' width='max-content'>
          <ListItem mb='4'>
            <Flex alignItems='center'>
              <Text width='100px'>Email:</Text>
              <a
                href='mailto:asofficial4k@gmail.com'
                target='_blank'
                rel='noreferrer'
              >
                <Flex alignItems='center'>
                  <MdEmail color='#C53030' cursor='pointer' size='20px' />
                  <Text color='red.600' ml='1'>
                    asofficial4k@gmail.com
                  </Text>
                </Flex>
              </a>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex alignItems='center'>
              <Text width='99px'>Linkedin:</Text>
              <a
                href='https://www.linkedin.com/in/devshaikh/'
                target='_blank'
                rel='noreferrer'
              >
                <Flex alignItems='center'>
                  <AiFillLinkedin
                    color='#C53030'
                    cursor='pointer'
                    size='22px'
                  />
                  <Text color='red.600' ml='1'>
                    devshaikh
                  </Text>
                </Flex>
              </a>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex alignItems='center'>
              <Text width='100px'>Github:</Text>
              <a
                href='https://github.com/DevShaikh'
                target='_blank'
                rel='noreferrer'
              >
                <Flex alignItems='center'>
                  <FaGithubSquare
                    color='#C53030'
                    cursor='pointer'
                    size='20px'
                  />
                  <Text color='red.600' ml='1'>
                    DevShaikh
                  </Text>
                </Flex>
              </a>
            </Flex>
          </ListItem>
        </OrderedList>
      </Box>
    </Box>
  )
}

export default contact
