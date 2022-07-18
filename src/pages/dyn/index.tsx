import { useState, useEffect, useRef, ReactElement } from 'react'

import MenuButtom from '@common/components/MenuBottom'
import { chakra, Grid, Stack, Box, SkeletonCircle, SkeletonText, Heading } from '@chakra-ui/react'
import ThemeToggle from '@layouts/core/ThemeToggle'

import { useScroll, motion, useTransform, useMotionValue, isValidMotionProp } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: isValidMotionProp,
})

const MotionBox = motion(Box)

const Page = () => {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 200])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])

  const [ref, inView, entry] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  })

  // const [isInViewport, setIsInViewport] = useState(false);

  //console.log(window.innerHeight);
  //let coso = useRef(null);

  // useEffect(() => {
  //   console.log(coso.current.offsetTop);
  //   if (
  //     coso.current.offsetTop > scrollY &&
  //     coso.current.offsetTop < window.innerHeight
  //   ) {
  //     setIsInViewport(true);
  //   } else {
  //     setIsInViewport(false);
  //   }
  // }, [coso]);
  // useEffect(() => {
  //   scrollY.onChange(v => console.log(v));
  // }, [scrollY]);

  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50,
    },
  }

  return (
    <Box bgColor="#3b6fe0" pt="320px" color="#fff" height="300vh" textAlign="center">
      {/* <Grid gap="2rem" h="100vh" bgColor="#3b6fe0" pt="320px" color="#fff" height="300vh" textAlign="center"> */}
      {/* <ThemeToggle /> */}
      {/* <Heading textAlign="center" mb={4}> */}
      {/*   DYN */}
      {/* </Heading> */}
      {/* <Stack> */}
      {/*   {Array.from(Array(20).keys()).map(idx => ( */}
      {/*     <Box key={idx} padding="6" boxShadow="lg" bg="white"> */}
      {/*       <SkeletonCircle size="10" /> */}
      {/*       <SkeletonText mt="4" noOfLines={4} spacing="4" /> */}
      {/*     </Box> */}
      {/*   ))} */}
      {/* </Stack> */}
      <ChakraBox
        w="150px"
        h="150px"
        borderRadius="1em"
        bgColor="#f9f07e"
        marginLeft="auto"
        marginRight="auto"
        style={{ y: y1, x: -50 }}
      />
      <ChakraBox
        w="150px"
        h="150px"
        borderRadius="1em"
        bgColor="#f9f07e"
        marginLeft="auto"
        marginRight="auto"
        style={{ y: y2, x: 50, background: 'salmon' }}
      />
      <div style={{ height: 500 }} />
      <div style={{ position: 'fixed', top: 0, left: 0 }}> {'is in view? ' + inView}</div>
      <MotionBox
        w="200px"
        h="200px"
        borderRadius="20px"
        bgColor="#fff"
        marginLeft="auto"
        marginRight="auto"
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 2, ease: 'easeOut' }}
        ref={ref}
      />
    </Box>
    // </Grid>
  )
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <MenuButtom />
    </div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Page
