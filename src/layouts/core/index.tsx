// For per-page layout, see index.tsx and _app.tsx note
import { Box } from '@chakra-ui/react'
import type { ReactNode } from 'react'

import Footer from './Footer'
import Header from './Header'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  // Data fetching inside layout component
  // const { data, error } = useSWR('/api/navigation', fetcher)
  // if (error) return <div>Failed to load</div>
  // if (!data) return <div>Loading...</div>
  //
  // return (
  //  <>
  //    <NavBar links={data.links} />
  //    <main>{children}</main>
  //    <Footer />
  //  </>
  // )

  return (
    <Box margin="0 auto" maxWidth={800} transition="0.5s ease-out">
      <Box margin="8">
        <Header />
        <Box as="main" marginY={22}>
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  )
}

export default Layout
