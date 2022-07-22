// https://www.youtube.com/watch?v=E7mGqt7v3Uc
import { Box, Flex } from '@chakra-ui/react'
import { useEffect } from 'react'

export default function Swiper3D() {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    // script.async = true
    script.innerHTML = `
      var swiper = new Swiper('.swiper-container', {
        effect: 'overflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: '.swiper-pagination',
        },
      });
    `

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])
  return (
    <Flex
      as="section"
      pos="relative"
      w="100%"
      minH="100vh"
      justify="center"
      align="center"
      bg="#2196f3"
      overflow="hidden"
    >
      <Box className="swiper-container" w="100%" pt="50px" pb="50px">
        <Box className="swiper-wrapper">
          <Box className="swiper-slide" bgPos="center" bgSize="cover" w="300px" h="300px">
            <Box className="testimonialBox">
              <img src="" className="quote" />
              <Box className="content">
                <p>Lorem ipsum</p>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}
