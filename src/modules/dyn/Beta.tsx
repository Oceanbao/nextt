import ThemeToggle from '@layouts/core/ThemeToggle'
import { Stack, SkeletonCircle, SkeletonText, Grid, Box, Heading } from '@chakra-ui/react'

import AutoSearch from './components/autoSearch'

export default function Beta() {
  return (
    <Grid gap="2rem" h="100vh">
      <ThemeToggle />
      <Heading textAlign="center" mb={4}>
        BETA
      </Heading>
      <Stack>
        <AutoSearch />
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
