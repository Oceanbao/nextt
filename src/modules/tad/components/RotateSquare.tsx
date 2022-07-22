import { Box, Flex, keyframes } from '@chakra-ui/react'

const rotateOuter = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '50%,100%': {
    transform: 'rotate(180deg)',
  },
})

const rotateInner = keyframes({
  '0%': {
    transform: 'rotate(90deg)',
  },
  '50%,100%': {
    transform: 'rotate(0deg)',
  },
})

const changeBgColor = keyframes({
  '0%': {
    background: '#ff0',
  },
  '25%': {
    background: '#0f0',
  },
  '50%': {
    background: '#ff4786',
  },
  '75%': {
    background: '#2da2ff',
  },
  '100%': {
    background: '#ff0',
  },
})

export default function RotateSquare() {
  return (
    <Flex as="section" justify="center" align="center" minH="100vh" animation={`${changeBgColor} 4s steps(1) infinite`}>
      <Box
        className="loader"
        pos="relative"
        w="50px"
        h="50px"
        background="#000"
        animation={`${rotateInner} 1s linear infinite`}
        sx={{
          '& div': {
            pos: 'absolute',
            width: '100%',
            height: '100%',
            background: '#000',
            animation: `${rotateOuter} 1s linear infinite`,
          },
          '&::before, & div::before': {
            content: '""',
            position: 'absolute',
            top: '2px',
            left: '2px',
            right: '2px',
            bottom: '2px',
            background: '#fff',
          },
        }}
      >
        <Box top="-100%" left="-2px" transformOrigin="bottom right" _before={{ background: '#ff0 !important' }}></Box>
        <Box right="-100%" top="-2px" transformOrigin="bottom left" _before={{ background: '#0f0 !important' }}></Box>
        <Box bottom="-100%" left="2px" transformOrigin="top left" _before={{ background: '#ff4786 !important' }}></Box>
        <Box left="-100%" top="2px" transformOrigin="top right" _before={{ background: '#2da2ff !important' }}></Box>
      </Box>
    </Flex>
  )
}
