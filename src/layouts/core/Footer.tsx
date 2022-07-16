import { Flex, Link, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center">
      <Text>
        {new Date().getFullYear()} -{' '}
        <Link href="github.com/oceanbao/nextt" isExternal rel="noopener noreferrer">
          github.com/oceanbao/nextt
        </Link>
      </Text>
    </Flex>
  )
}

export default Footer
