import type { NextPage } from 'next'
import { Box } from '@chakra-ui/react'

import SomeImage from '@modules/simplesample/components/SomeImage'
import SomeText from '@modules/simplesample/components/SomeText'

const SimpleSample: NextPage = () => {
  return (
    <Box display={{ md: 'flex' }} alignItems="center" minHeight="70vh" gap={8} mb={8} w="full">
      <SomeImage />

      <Box>
        <SomeText />
      </Box>
    </Box>
  )
}

export default SimpleSample
