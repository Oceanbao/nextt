import { ReactNode } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

// Data Fetching inside Layout component
// import useSWR from 'swr'
// import Navbar from './navbar'
// import Footer from './footer'

// export default function Layout({ children }) {
//   const { data, error } = useSWR('/api/navigation', fetcher)

//   if (error) return <div>Failed to load</div>
//   if (!data) return <div>Loading...</div>

//   return (
//     <>
//       <Navbar links={data.links} />
//       <main>{children}</main>
//       <Footer />
//     </>
//   )
// }

import { Box, Drawer, DrawerContent, useDisclosure } from '@chakra-ui/react'

export default function Layout(props: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box minH="100vh" bg="gray.100">
      <Sidebar onClose={onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>

      {/* Header */}
      <Header onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {props.children}
      </Box>
    </Box>
  )
}
