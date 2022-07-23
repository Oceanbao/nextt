import { Box } from '@chakra-ui/react'
import { useEffect } from 'react'

export default function SwiperMenu({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    // script.async = true
    script.innerHTML = `
    (() => {
      var menuButton = document.querySelector('.menu-button');
      var openMenu = function () {
        swiper.slidePrev();
      };
      var swiper = new Swiper('.swiper', {
        slidesPerView: 'auto',
        initialSlide: 1,
        resistanceRatio: 0,
        slideToClickedSlide: true,
        on: {
          slideChangeTransitionStart: function () {
            var slider = this;
            console.log('start ', slider.activeIndex)
            if (slider.activeIndex === 0) {
              menuButton.classList.add('cross');
              // required because of slideToClickedSlide
              // menuButton.removeEventListener('click', openMenu, true);
            } else {
              menuButton.classList.remove('cross');
            }
          },
          slideChangeTransitionEnd: function () {
            var slider = this;
            console.log('end ', slider.activeIndex)
            if (slider.activeIndex === 1) {
              // menuButton.addEventListener('click', openMenu, true);
            }
          },
        },
      });
    })();
    `

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <Box
      className="box"
      pos="relative"
      h="100vh"
      bg="#eee"
      fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif"
      fontSize="14px"
      color="#000"
    >
      <Box
        className="swiper"
        w="100%"
        h="100%"
        sx={{
          '.swiper-slide': {
            textAlign: 'center',
            fontSize: '18px',
            background: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
          '.menu': {
            minWidth: '100px',
            width: '70%',
            maxWidth: '320px',
            backgroundColor: '#2c8dfb',
            color: '#fff',
          },
          '.content': {
            width: '100%',
          },
          '.menu-button': {
            position: 'absolute',
            top: 0,
            left: 0,
            padding: '15px',
            cursor: 'pointer',
            transition: '0.3s',
            backgroundColor: '#2c8dfb',
          },
          '.bar': {
            position: 'relative',
            display: 'block',
            width: '50px',
            height: '5px',
            margin: '10px auto',
            backgroundColor: '#fff',
            borderRadius: '10px',
            transition: '0.3s',
          },
        }}
      >
        <Box className="swiper-wrapper">
          <Box className="swiper-slide menu">Menu slide</Box>
          <Box className="swiper-slide content">
            <Box className="menu-button">
              <Box
                className="bar"
                mt="0"
                sx={{
                  '.menu-button:hover &': {
                    transform: 'translateY(1.5px) rotate(-4.5deg)',
                  },
                  '.cross &': {
                    transform: 'translateY(15px) rotate(-45deg)',
                  },
                  '.cross:hover &': {
                    transform: 'translateY(13.5px) rotate(-40.5deg)',
                  },
                }}
              ></Box>
              <Box
                className="bar"
                sx={{
                  '.menu-button:hover &': {
                    opacity: '0.9',
                  },
                  '.cross &': {
                    opacity: '0',
                  },
                  '.cross:hover &': {
                    opacity: '0.1',
                  },
                }}
              ></Box>
              <Box
                className="bar"
                mb="0"
                sx={{
                  '.menu-button:hover &': {
                    transform: 'translateY(1.5px) rotate(4.5deg)',
                  },
                  '.cross &': {
                    transform: 'translateY(-15px) rotate(45deg)',
                  },
                  '.cross:hover &': {
                    transform: 'translateY(-13.5px) rotate(40.5deg)',
                  },
                }}
              ></Box>
            </Box>
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
