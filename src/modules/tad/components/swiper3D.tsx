import Image from 'next/image'
import { Box, Flex, chakra } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards, EffectCube, Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/pagination'
import 'swiper/css/effect-cards'

const ChakraSwiper = chakra(Swiper)
const ChakraSwiperSlide = chakra(SwiperSlide)

const SwipeCube = () => {
  return (
    <ChakraSwiper
      effect={'cube'}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      pagination={true}
      modules={[EffectCube, Pagination]}
      className="swiperCube"
      sx={{
        '&': {
          width: '300px',
          height: '300px',
        },
        '.swiper-slide': {
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        },
        '.swiper-slide img': {
          display: 'block',
          width: '100%',
        },
      }}
    >
      <SwiperSlide>
        <Image src="/clothes/cloth1.webp" width="300px" height="300px" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/clothes/cloth2.webp" width="300px" height="300px" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/clothes/cloth3.webp" width="300px" height="300px" />
      </SwiperSlide>
    </ChakraSwiper>
  )
}

const SwipeCards = () => {
  return (
    <ChakraSwiper
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
      className="swiperCards"
      sx={{
        '&': {
          width: '240px',
          height: '320px',
        },
        '.swiper-slide': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '18px',
          fontSize: '22px',
          fontWeight: 'bold',
          color: '#fff',
        },
      }}
    >
      <SwiperSlide style={{ backgroundColor: 'rgb(206, 17, 17)' }}>Card 1</SwiperSlide>
      <SwiperSlide style={{ backgroundColor: 'rgb(0, 140, 255)' }}>Card 2</SwiperSlide>
      <SwiperSlide style={{ backgroundColor: 'rgb(10, 183, 111)' }}>Card 3</SwiperSlide>
      <SwiperSlide style={{ backgroundColor: 'rgb(211, 122, 7)' }}>Card 4</SwiperSlide>
      <SwiperSlide style={{ backgroundColor: 'rgb(118, 163, 12)' }}>Card 5</SwiperSlide>
      <SwiperSlide style={{ backgroundColor: 'rgb(180, 10, 47)' }}>Card 6</SwiperSlide>
      <SwiperSlide style={{ backgroundColor: 'rgb(35, 99, 19)' }}>Card 7</SwiperSlide>
    </ChakraSwiper>
  )
}

export default function Swiper3D() {
  return (
    <Flex as="section" justify="center" align="center" flexDir="column" gap={20} h="100vh">
      <SwipeCube />
      <SwipeCards />
    </Flex>
  )
}
