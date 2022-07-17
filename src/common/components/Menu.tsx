import Link from 'next/link'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Menu, MenuButton, MenuItem, MenuList, IconButton } from '@chakra-ui/react'

const NavMenu = () => {
  return (
    <Menu>
      <MenuButton as={IconButton} aria-label="Options" icon={<HamburgerIcon />} variant="outline" />
      <MenuList>
        <MenuItem>
          <Link href="/">
            <a>Home</a>
          </Link>
        </MenuItem>
        <Link href="/dashboard">
          <MenuItem>Dashboard</MenuItem>
        </Link>
        <Link href="/fakenews">
          <MenuItem>FakeNews</MenuItem>
        </Link>
        <Link href="/dyn">
          <MenuItem>Dyn</MenuItem>
        </Link>
      </MenuList>
    </Menu>
  )
}

export default NavMenu
