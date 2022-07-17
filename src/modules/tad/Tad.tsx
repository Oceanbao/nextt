import ThemeToggle from '@layouts/core/ThemeToggle'
import { Stack, SkeletonCircle, SkeletonText, Grid, Box } from '@chakra-ui/react'
import MenuButtom from '@common/components/MenuBottom'

export default function Tad() {
  console.log('RENDER - TAD')

  return (
    <Grid gap="2rem" h="100vh">
      <ThemeToggle />
      <Stack>
        {Array.from(Array(20).keys()).map(idx => (
          <Box key={idx} padding="6" boxShadow="lg" bg="white">
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" />
          </Box>
        ))}
      </Stack>

      <MenuButtom />
    </Grid>
  )
}
