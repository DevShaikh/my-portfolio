import Link from 'next/link'
import { Box, Avatar, Flex, Heading, Text } from '@chakra-ui/react'
import { MdEmail } from 'react-icons/md'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaGithubSquare } from 'react-icons/fa'
import MobileMenu from '../MobileMenu'

const Sidebar = () => {
  return (
    <Flex
      width={['100%', '100%', '25%', '25%']}
      justifyContent={[
        'space-between',
        'space-between',
        'space-between',
        'space-between',
      ]}
      background='red.600'
      flexDirection='column'
      pt='8'
      pb={['4', '4', '8', '8']}
      px={['0', '0', '4', '4']}
      height={['max-content', 'max-content', '100vh', '100vh']}
    >
      <Box
        textAlign='center'
        mb={['4', '4', '8', '8']}
        pb={['4', '4', '0', '0']}
        borderBottom={[
          '1px solid #efefef',
          '1px solid #efefef',
          'none',
          'none',
        ]}
      >
        <Avatar
          size='2xl'
          name='Ahmed Shaikh'
          src='/images/profile.jpg'
          mb='4'
          className='sidebarAvatar'
        />
        <Box>
          <Heading size='lg' color='#fff'>
            AHMED SHAIKH
          </Heading>
          <Heading size='md' fontWeight='medium' color='#fff'>
            JR. FULLSTACK DEVELOPER
          </Heading>
        </Box>
      </Box>

      <Box
        flexDirection='column'
        mb='4'
        display={['none', 'none', 'block', 'block']}
      >
        <Heading size='sm' color='#fff' mb='4' fontWeight='medium'>
          LINKS
        </Heading>
        <Box px='6'>
          <Heading
            size='sm'
            fontWeight='medium'
            my='2'
            color='#ccc'
            width='max-content'
            _hover={{ color: '#fff' }}
          >
            <Link href='/'>Portfolio</Link>
          </Heading>
          <Heading
            size='sm'
            fontWeight='medium'
            my='2'
            color='#ccc'
            width='max-content'
            _hover={{ color: '#fff' }}
          >
            <Link href='/contact'>Contact</Link>
          </Heading>
          <Heading
            size='sm'
            fontWeight='medium'
            my='2'
            color='#ccc'
            width='max-content'
            _hover={{ color: '#fff' }}
          >
            <Link href='/images/Ahmed%20Shaikh%20Resume.pdf'>My Resume</Link>
          </Heading>
        </Box>
      </Box>
      <Flex
        flexDirection={['row', 'row', 'column', 'column']}
        justifyContent={[
          'space-between',
          'space-between',
          'initial',
          'initial',
        ]}
      >
        <Heading
          size='sm'
          color='#fff'
          mb='4'
          fontWeight='medium'
          display={['none', 'none', 'block', 'block']}
        >
          GET IN TOUCH
        </Heading>
        <Flex px='6' overflow='hidden' alignItems='center'>
          <a
            href='mailto:asofficial4k@gmail.com'
            target='_blank'
            rel='noreferrer'
            className='socialLinks'
          >
            <MdEmail color='#fff' cursor='pointer' size='26px' />
          </a>
          <a
            href='https://www.linkedin.com/in/devshaikh/'
            target='_blank'
            rel='noreferrer'
            className='socialLinks'
          >
            <AiFillLinkedin color='#fff' cursor='pointer' size='24px' />
          </a>
          <a
            href='https://github.com/DevShaikh'
            target='_blank'
            rel='noreferrer'
            className='socialLinks'
          >
            <FaGithubSquare color='#fff' cursor='pointer' size='22px' />
          </a>
        </Flex>
        <Box display={['block', 'block', 'none', 'none']}>
          <MobileMenu />
        </Box>
      </Flex>
    </Flex>
  )
}

export default Sidebar
