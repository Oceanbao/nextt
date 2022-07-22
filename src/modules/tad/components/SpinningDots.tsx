import { Box, Flex, keyframes } from '@chakra-ui/react'

const animate = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
    filter: 'hue-rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
    filter: 'hue-rotate(360deg)',
  },
})

const Dot = ({ idx }: { idx: number }) => {
  return (
    <Box
      as="span"
      pos="absolute"
      top="0"
      left="0"
      w="100%"
      h="100%"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '25px',
        height: '25px',
        background: 'transparent',
        border: '4px solid #00efff',
        borderRadius: '50%',
        boxShadow: `0px 0px 2px #00efff,
        -30px -30px 0px #00efff,
        -30px -30px 20px #00efff,
        30px 30px 0px #00efff,
        30px 30px 20px #00efff,
        30px -30px 0px #00efff,
        30px -30px 20px #00efff,
        -30px 30px 0px #00efff,
        -30px 30px 20px #00efff`,
        animation: `${animate} 5s linear infinite`,
        animationDelay: 'calc(-0.25s * var(--i))',
        transformOrigin: '20px',
        transition: '2s',
      }}
      sx={{
        '--i': `${idx}`,
        transform: 'rotate(calc(36deg * var(--i)))',
        '.loader:hover &::before': {
          boxShadow: `0px 0px 2px #00efff,
          -200px -200px 0px #00efff,
          -200px -200px 20px #00efff,
          200px 200px 0px #00efff,
          200px 200px 20px #00efff,
          200px -200px 0px #00efff,
          200px -200px 20px #00efff,
          -200px 200px 0px #00efff,
          -200px 200px 20px #00efff`,
          transformOrigin: '250px',
        },
      }}
    ></Box>
  )
}

export default function SpinningDots() {
  return (
    <Flex justify="center" align="center" minH="100vh" overflow="hidden" bg="#001f25">
      <Box className="loader" pos="relative" w="300px" h="300px" sx={{}}>
        {Array.from(Array(10).keys()).map(idx => (
          <Dot key={idx} idx={idx + 1} />
        ))}
      </Box>
    </Flex>
  )
}
