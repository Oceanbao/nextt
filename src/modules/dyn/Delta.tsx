import ThemeToggle from '@layouts/core/ThemeToggle'
import { Stack, SkeletonCircle, SkeletonText, Grid, Box, Heading } from '@chakra-ui/react'
import ChromaScrollBar from './components/ChromaScrollBar'
import TracingFace from './components/TracingFace'

export default function Delta() {
  return (
    <Grid gap="2rem" h="100vh">
      <ThemeToggle />
      <Heading textAlign="center" mb={4}>
        DELTA
      </Heading>
      <ChromaScrollBar />
      <TracingFace />
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
