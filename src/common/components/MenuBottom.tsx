import {
  Box,
  HStack,
  Slide,
  useDisclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'
import { CalendarIcon, ChatIcon, EmailIcon, SettingsIcon, StarIcon } from '@chakra-ui/icons'
import { HamburgerIcon, AddIcon, ExternalLinkIcon, RepeatIcon, EditIcon } from '@chakra-ui/icons'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function MenuButtom() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const color = useColorModeValue('white', 'white')
  const router = useRouter()

  useEffect(() => {
    let didScroll = false
    let lastScrollTop = 0
    let delta = 5

    window.addEventListener('scroll', function (e) {
      didScroll = true
    })

    function hasScrolled() {
      const st = window.scrollY

      if (Math.abs(lastScrollTop - st) <= delta) return

      if (st < lastScrollTop) {
        onOpen()
      } else {
        onClose()
      }

      lastScrollTop = st
    }

    const timer = setInterval(function () {
      if (didScroll) {
        hasScrolled()
        didScroll = false
      }
    }, 250)

    return () => clearInterval(timer)
  }, [])

  return (
    <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
      <HStack bgColor="gray.800" h="5vh" w="100%" justifyContent="space-evenly">
        <ChatIcon color="gray.50" w={5} h={5} onClick={() => router.push('/dyn/alpha')} />
        <CalendarIcon color="gray.50" w={5} h={5} onClick={() => router.push('/dyn/beta')} />
        <EmailIcon color="gray.50" w={5} h={5} onClick={() => router.push('/dyn/gamma')} />
        <StarIcon color="gray.50" w={5} h={5} onClick={() => router.push('/dyn/delta')} />
        {/* <SettingsIcon color='gray.50' w={5} h={5} /> */}
        <Box display="flex" placeContent="center" alignItems="center">
          <Menu>
            <MenuButton as={IconButton} aria-label="Options" icon={<HamburgerIcon />} variant="link" color={color} />
            <MenuList>
              <MenuItem icon={<AddIcon />} command="⌘T">
                New Tab
              </MenuItem>
              <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
                New Window
              </MenuItem>
              <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
                Open Closed Tab
              </MenuItem>
              <MenuItem icon={<EditIcon />} command="⌘O" onClick={() => router.push('/')}>
                Open File...
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </HStack>
    </Slide>
  )
}
