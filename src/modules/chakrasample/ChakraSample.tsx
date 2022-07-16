import type { NextPage } from 'next'
import { Link as ChakraLink, Text, Code, List, ListIcon, ListItem } from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'

import { Hero } from '@modules/chakrasample/components/Hero'
import Container from '@common/components/Container'
import { Main } from '@modules/chakrasample/components/Main'
import { DarkModeSwitch } from '@modules/chakrasample/components/DarkModeSwitch'
import { CTA } from '@modules/chakrasample/components/CTA'
import { Footer } from '@modules/chakrasample/components/Footer'

const ChakraSample: NextPage = () => (
  <Container height="100vh">
    <Hero />
    <Main>
      <Text>
        Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code> + <Code>TypeScript</Code>.
      </Text>

      <List spacing={3} my={0}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <ChakraLink isExternal href="https://chakra-ui.com" flexGrow={1} mr={2}>
            Chakra UI <LinkIcon />
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <ChakraLink isExternal href="https://nextjs.org" flexGrow={1} mr={2}>
            Next.js <LinkIcon />
          </ChakraLink>
        </ListItem>
      </List>
    </Main>

    <DarkModeSwitch />
    <Footer>
      <Text>Next ❤️ Chakra</Text>
    </Footer>
    <CTA />
  </Container>
)

export default ChakraSample
