import NextLink from 'next/link'
import { Flex, Icon, Text } from '@chakra-ui/react'

import type { TLink } from './Sidebar'

type AppProps = {
  link: TLink
}

const NavLink = ({ link, ...rest }: AppProps) => {
  const { label, icon, href } = link

  return (
    <NextLink href={href} passHref>
      <a>
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: 'cyan.400',
            color: 'white',
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: 'white',
              }}
              as={icon}
            />
          )}
          <Text fontSize="1.2rem">{label}</Text>
        </Flex>
      </a>
    </NextLink>
  )
}

export default NavLink
