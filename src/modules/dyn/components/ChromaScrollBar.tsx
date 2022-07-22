import { Box, keyframes } from '@chakra-ui/react'
import { useEffect, useRef } from 'react'

const animate = keyframes({
  '0%, 100%': {
    filter: 'hue-rotate(0deg)',
  },
  '50%': {
    filter: 'hue-rotate(360deg)',
  },
})

// ::-webki-scrollbar { width: 0 }

export default function ChromaScrollBar() {
  const progressbarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let didScroll = false
    let lastScrollTop = 0
    let delta = 5

    const totalHeight = document.body.scrollHeight - window.innerHeight

    window.addEventListener('scroll', function (e) {
      didScroll = true
    })

    function progressHeight() {
      const progressHeight = (window.pageYOffset / totalHeight) * 100
      progressbarRef.current!.style.height = progressHeight + '%'
    }

    function hasScrolled() {
      const st = window.scrollY

      if (Math.abs(lastScrollTop - st) <= delta) return

      progressHeight()

      lastScrollTop = st
    }

    const timer = setInterval(function () {
      if (didScroll) {
        hasScrolled()
        didScroll = false
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  return (
    <Box>
      <Box
        className="scrollbar"
        pos="fixed"
        top="0"
        right="0"
        width="10px"
        height="100%"
        bg="rgba(255,255,255,0.05)"
      ></Box>
      <Box
        className="progressbar"
        ref={progressbarRef}
        pos="fixed"
        top="0"
        right="0"
        width="10px"
        height="0"
        bg="linear-gradient(to top, #008aff, #00ffe7)"
        animation={`${animate} 5s linear infinite`}
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '0',
          background: 'linear-gradient(to top, #008aff, #00ffe7)',
          filter: 'blur(10px)',
        }}
        _after={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '0',
          background: 'linear-gradient(to top, #008aff, #00ffe7)',
          filter: 'blur(30px)',
        }}
      ></Box>
    </Box>
  )
}
