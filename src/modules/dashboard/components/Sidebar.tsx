import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { Box, CloseButton, Flex, Text } from '@chakra-ui/react'

import { FiHome, FiTrendingUp, FiCompass, FiStar, FiSettings } from 'react-icons/fi'

import NavLink from './NavLink'

const LinkItems = [
  { label: 'Home', icon: FiHome, href: '#' },
  { label: 'Trending', icon: FiTrendingUp, href: '#' },
  { label: 'Explore', icon: FiCompass, href: '#' },
  { label: 'Favourites', icon: FiStar, href: '#' },
  { label: 'Settings', icon: FiSettings, href: '#' },
]

export type TLink = typeof LinkItems[0]

type AppProps = {
  onClose: () => void
  [props: string]: any
}

const Sidebar = ({ onClose, ...rest }: AppProps) => {
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeComplete', onClose)
    return () => {
      router.events.off('routeChangeComplete', onClose)
    }
  }, [router.events, onClose])

  return (
    <Box
      transition="3s ease"
      bg="white"
      borderRight="1px"
      borderRightColor="gray.200"
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Magasin
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link, idx) => (
        <NavLink key={idx} link={link} />
      ))}
    </Box>
  )
}

export default Sidebar
