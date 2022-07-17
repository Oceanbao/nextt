import {
  Divider,
  Stack,
  HStack,
  Image,
  AspectRatio,
  Button,
  VStack,
  Heading,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'

const Cart = () => {
  const { toggleColorMode } = useColorMode()
  const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50')
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start" bg={bgColor}>
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your cart</Heading>
        <Text>
          If the price is too hard on your eyes,
          <Button onClick={toggleColorMode} variant="link" colorScheme="black">
            try changing the theme.
          </Button>
        </Text>
      </VStack>
      <HStack spacing={6} alignItems="center" w="full">
        <AspectRatio ratio={1} w={24}>
          <Image src="/logo.svg" alt="" />
        </AspectRatio>
        <Stack spacing={0} w="full" direction="row" justifyContent="space-between" alignItems="center">
          <VStack w="full" spacing={0} alignItems="flex-start">
            <Heading size="md">Penny Board</Heading>
            <Text color="gray.600">PNYC23452395</Text>
          </VStack>
          <Heading size="sm" textAlign="end">
            $119.00
          </Heading>
        </Stack>
      </HStack>
      <VStack spacing={4} alignItems="strech" w="full">
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Subtotal</Text>
          <Heading size="sm">$119.00</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Shipping</Text>
          <Heading size="sm">19.99</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Taxes (est.)</Text>
          <Heading size="sm">$23.80</Heading>
        </HStack>
      </VStack>
      <Divider />
      <HStack justifyContent="space-between" w="full">
        <Text color={secondaryTextColor}>Total</Text>
        <Heading size="lg">$162.79</Heading>
      </HStack>
    </VStack>
  )
}

export default Cart