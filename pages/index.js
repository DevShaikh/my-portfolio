import Head from 'next/head'
import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import UnderlinedHeading from '../components/UnderlinedHeading'
import { Img } from '@chakra-ui/image'
import { Button } from '@chakra-ui/button'
import { Tag } from '@chakra-ui/tag'

import projectsList from '../data/projects'

const Home = () => {
  return (
    <Box py='6' px='10'>
      <Head>
        <title>Portfolio | Ahmed Shaikh</title>
      </Head>
      <Box mb='5'>
        <UnderlinedHeading>PORTFOLIO</UnderlinedHeading>
        <Text>
          See my works below. Unless explicitly stated otherwise,{' '}
          <strong>
            all their back-end and front-end parts were completely done by me.
          </strong>
        </Text>
      </Box>
      <Box>
        {projectsList.map((project, key) => (
          <Flex mb='4' borderBottom='2px solid #efefef' py='5' key={key}>
            <Box width='50%' pr='4'>
              <Box mb='6'>
                <Heading size='lg' fontWeight='medium' color='blackAlpha.900'>
                  {project.title}
                </Heading>
                <Text mb='4'>{project.description}</Text>
                <Heading
                  size='sm'
                  fontWeight='medium'
                  color='blackAlpha.900'
                  mb='2'
                >
                  MY ROLE:
                </Heading>
                <Text mb='4'>{project.myRole}</Text>
              </Box>
              <Box mb='4'>
                <Heading
                  size='sm'
                  fontWeight='medium'
                  color='blackAlpha.900'
                  mb='2'
                >
                  TECHNOLOGIES
                </Heading>
                {project.technologies.map((tech, key) => (
                  <Tag m='1' colorScheme='red' key={key}>
                    {tech}
                  </Tag>
                ))}
              </Box>
              <a href={project.link} target='_blank' rel='noreferrer'>
                <Button colorScheme='red'>More details</Button>
              </a>
            </Box>
            <Box width='50%'>
              <Img src={project.image} />
            </Box>
          </Flex>
        ))}
      </Box>
    </Box>
  )
}

export default Home
