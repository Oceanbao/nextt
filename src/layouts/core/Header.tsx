import { Box, Flex, Heading } from '@chakra-ui/react'
import Link from 'next/link'

import NavMenu from '@common/components/Menu'

import ThemeToggle from './ThemeToggle'

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <Heading as="h1" size="md">
        <Link href="/">NextJS-ChakraUI-RTK</Link>
      </Heading>
      <Box marginLeft="auto" display="flex" gap={2}>
        <NavMenu />
        <ThemeToggle />
      </Box>
    </Flex>
  )
}

export default Header
