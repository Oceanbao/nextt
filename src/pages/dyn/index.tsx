import { ReactElement } from 'react'

import MenuButtom from '@common/components/MenuBottom'
import { Grid, Stack, Box, SkeletonCircle, SkeletonText, Heading } from '@chakra-ui/react'
import ThemeToggle from '@layouts/core/ThemeToggle'

const Page = () => {
  return (
    <Grid gap="2rem" h="100vh">
      <ThemeToggle />
      <Heading textAlign="center" mb={4}>
        DYN
      </Heading>
      <Stack>
        {Array.from(Array(20).keys()).map(idx => (
          <Box key={idx} padding="6" boxShadow="lg" bg="white">
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" />
          </Box>
        ))}
      </Stack>
    </Grid>
  )
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <MenuButtom />
    </div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Page
