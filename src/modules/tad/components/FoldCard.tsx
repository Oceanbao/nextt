import { Box, Flex } from '@chakra-ui/react'

export default function FoldCard() {
  return (
    <Flex justify="center" align="center" minH="100vh" background="#fbe9e7">
      <Box
        className="card"
        pos="relative"
        w="300px"
        h="400px"
        bg="#fff"
        sx={{
          transformStyle: 'preserve-3d',
          transform: 'perspective(1000px)',
          boxShadow: '10px 20px 40px rgba(0,0,0,0.25)',
          transition: '1s',
        }}
        _hover={{ transform: 'translateX(50%)' }}
      >
        <Box
          className="imgBox"
          pos="relative"
          w="100%"
          h="100%"
          zIndex="1"
          bg="#000"
          sx={{
            transformOrigin: 'left',
            transformStyle: 'preserve-3d',
            transition: '1s',
            boxShadow: '10px 20px 40px rgba(0,0,0,0.25)',
            '.card:hover &': {
              transform: 'rotateY(-180deg)',
            },
            '& img': {
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
            },
          }}
        >
          <img src="/clothes/cloth1.webp" />
          <img
            src="/clothes/cloth2.webp"
            style={{
              transform: 'rotateY(180deg)',
            }}
          />
        </Box>
        <Flex
          className="details"
          pos="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          p="20px"
          justify="center"
          align="center"
        >
          <Flex className="content" justify="center" align="center" flexDir="column">
            <h2 style={{ textAlign: 'center', fontWeight: '700', lineHeight: '1em' }}>Someone Famous</h2>
            <Box>Lorem ipsum</Box>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  )
}
