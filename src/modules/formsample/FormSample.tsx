import type { NextPage } from 'next'
import { Flex } from '@chakra-ui/react'

import Details from '@modules/formsample/components/Details'
import Cart from '@modules/formsample/components/Cart'

import Container from '@common/components/Container'

const FormSample: NextPage = () => (
  // Container centers component
  // Default padding 16px, 'container.xl' = 1280px in 'size'
  // 20 is spacing unit = 4 x 20 px
  // Responsive array value: [sm, md, lg]
  <Container maxW="container.xl" p={0}>
    <Flex h={{ base: 'auto', md: '100vh' }} py={[0, 10, 20]} direction={{ base: 'column-reverse', md: 'row' }}>
      <Details />
      <Cart />
    </Flex>
  </Container>
)

export default FormSample
