import { useEffect } from 'react'
import ThemeToggle from '@layouts/core/ThemeToggle'
import { Box, Flex, Heading } from '@chakra-ui/react'
import { motion, useTransform, useScroll, useMotionValue, transform } from 'framer-motion'

const MotionBox = motion(Box)

// function Example() {
//   return (
//     <MotionBox
//       size="40px"
//       bg="red.300"
//       drag="x"
//       dragConstraints={{ left: -100, right: 100 }}
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.9 }}
//     />
//   );
// }

export default function Alpha() {
  const { scrollY } = useScroll()
  const scaleRight = useTransform(scrollY, [0, 500], [2, 1])
  const yRight = useTransform(scrollY, [0, 500], ['25vh', '0vh'])
  const xRight = useTransform(scrollY, [0, 500], ['-25vw', '0vw'])
  const xLeft = useTransform(scrollY, [0, 500], ['-60%', '0vw'])

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const opacity = useMotionValue(1)

  useEffect(() => {
    function updateOpacity() {
      const maxYX = Math.max(x.get(), y.get())
      const newOpacity = transform(maxYX, [0, 100], [1, 0.1])
      opacity.set(newOpacity)
    }

    const unsubX = x.onChange(updateOpacity)
    const unsubY = y.onChange(updateOpacity)

    return () => {
      unsubX()
      unsubY()
    }
  }, [])

  return (
    <Box w="100vw" h="300vh">
      <ThemeToggle />

      <Heading textAlign="center" mb={4}>
        ALPHA
      </Heading>

      <Flex h="110vh" pos="sticky" top="0px">
        <MotionBox drag style={{ x, opacity, backgroundColor: 'red', width: 100, height: 100 }} />

        <MotionBox
          padding="2rem"
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDir="column"
          h="100%"
          w="50vw"
          style={{
            x: xLeft,
          }}
        >
          <h2>Slide In</h2>
        </MotionBox>
        <MotionBox
          padding="2rem"
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDir="column"
          h="100%"
          w="50vw"
          style={{
            scale: scaleRight,
            y: yRight,
            x: xRight,
          }}
        >
          <h2>Scroll Down to Zoom Out</h2>
        </MotionBox>
      </Flex>
    </Box>
  )
}
