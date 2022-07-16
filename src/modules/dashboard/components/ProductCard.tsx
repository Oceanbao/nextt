import Image from 'next/image'
import { Box, Flex, chakra } from '@chakra-ui/react'
import { AiTwotoneStar } from 'react-icons/ai'

const ChakraStar = chakra(AiTwotoneStar)

import type { ModalData } from './../Dashboard'

type AppProps = {
  product: ModalData
  setModalData: (product: ModalData) => void
}

const ProductCard = ({ product, setModalData }: AppProps) => {
  const { img, title, price } = product
  const score = 5
  const reviewCount = 23

  return (
    <Flex
      w="full"
      h="full"
      alignItems="center"
      justifyContent="center"
      cursor="pointer"
      bg="white"
      rounded="xl"
      shadow="lg"
      borderWidth="1px"
      onClick={() => setModalData(product)}
    >
      <Box w="full" h="full">
        <Box w="full" h="200px" position="relative" overflow="hidden" roundedTop="lg">
          <Image src={img} objectFit="cover" alt="picture of a house" layout="fill" priority={true} />
        </Box>

        <Box p="6">
          <Box fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={3}>
            {title}
          </Box>

          <Box>${price}</Box>

          <Box display="flex" mt="3" alignItems="center">
            {Array(5)
              .fill('')
              .map((_, idx) => (
                <ChakraStar key={idx} color={idx < score ? 'teal.500' : 'gray.300'} />
              ))}
          </Box>

          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}

export default ProductCard
