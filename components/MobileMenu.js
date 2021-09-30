import Link from 'next/link'

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Heading,
} from '@chakra-ui/react'

import { MdEmail } from 'react-icons/md'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaGithubSquare } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'

const MobileMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<GiHamburgerMenu />}
        variant='ghost'
        color='#fff'
        _hover={{ color: '#000', background: '#fff' }}
      />
      <MenuList>
        <MenuItem>
          <Heading size='sm' fontWeight='medium' my='2' width='max-content'>
            <Link href='/'>Portfolio</Link>
          </Heading>
        </MenuItem>
        <MenuItem>
          <Heading size='sm' fontWeight='medium' my='2' width='max-content'>
            <Link href='/contact'>Contact</Link>
          </Heading>
        </MenuItem>
        <MenuItem>
          <Heading size='sm' fontWeight='medium' my='2' width='max-content'>
            <Link href='/images/Ahmed%20Shaikh%20Resume.pdf'>My Resume</Link>
          </Heading>
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default MobileMenu
