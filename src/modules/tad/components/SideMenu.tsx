import { Box, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const MotionBox = motion(Box)

export default function SideMenu() {
  const [active, setActive] = useState(false)
  const toggleRef = useRef<HTMLDivElement>(null)
  const dragBoxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const toggleRefLocal = toggleRef.current

    const delta = 6
    let startY: number
    let startX: number

    function onMouseDown(event: MouseEvent) {
      startX = event.pageX
      startY = event.pageY
    }

    function onMouseUp(event: MouseEvent) {
      const diffX = Math.abs(event.pageX - startX)
      const diffY = Math.abs(event.pageY - startY)

      if (diffX < delta && diffY < delta) {
        setActive(!active)
      }
    }

    toggleRefLocal!.addEventListener('mousedown', onMouseDown)

    toggleRefLocal!.addEventListener('mouseup', onMouseUp)

    return () => {
      toggleRefLocal!.removeEventListener('mousedown', onMouseDown)
      toggleRefLocal!.removeEventListener('mouseup', onMouseUp)
    }
  }, [])

  return (
    <Flex className="box" justify="start" align="center" minH="100vh" bg="#6843d1" id="sideMenu" ref={dragBoxRef}>
      <MotionBox className="box" pos="relative" drag dragConstraints={dragBoxRef}>
        <Box
          className={`nav ${active ? 'active' : ''}`}
          pos="relative"
          w="80px"
          h="auto"
          bg="#fff"
          borderRadius="10px"
          overflow="hidden"
          boxShadow="0 5px 15px rgba(0,0,0,0.2)"
          transition="0.5s"
          sx={{
            // 'ul': { top: 0, left: 0, width: '100%' },
            '&.active': { width: '300px' },
            li: { position: 'relative', listStyle: 'none', width: '100%' },
            'li:hover': { background: '#efefef' },
            a: {
              position: 'relative',
              display: 'flex',
              width: '100%',
              textDecoration: 'none',
              color: '#6843cf',
              fontWeight: '500',
            },
            '.icon': {
              position: 'relative',
              display: 'block',
              minWidth: '80px',
              height: '60px',
              lineHeight: '60px',
              textAlign: 'center',
            },
            '.fa': { fontSize: '24px' },
            '.title': {
              position: 'relative',
              display: 'block',
              height: '60px',
              lineHeight: '60px',
              whiteSpace: 'nowrap',
            },
          }}
        >
          <ul>
            <li>
              <a href="#sideMenu">
                <span className="icon">
                  <i className="fa fa-cog"></i>
                </span>
                <span className="title">Setting</span>
              </a>
            </li>
            <li>
              <a href="#sideMenu">
                <span className="icon">
                  <i className="fa fa-lock"></i>
                </span>
                <span className="title">Password</span>
              </a>
            </li>
            <li>
              <a href="#sideMenu">
                <span className="icon">
                  <i className="fa fa-sign-out"></i>
                </span>
                <span className="title">Sign Out</span>
              </a>
            </li>
          </ul>
        </Box>
        <Box
          ref={toggleRef}
          className={`${active ? 'active' : ''}`}
          pos="absolute"
          top="calc(50% - 20px)"
          right="-20px"
          width="40px"
          height="40px"
          bg="#f5f5f5"
          cursor="pointer"
          border="5px solid #6843d1"
          borderRadius="50%"
          _before={{
            content: '"\\f054"',
            fontFamily: 'fontAwesome',
            position: 'absolute',
            width: '100%',
            height: '100%',
            lineHeight: '30px',
            textAlign: 'center',
            fontSize: '16px',
            color: '#6843d1',
          }}
          sx={{
            '&.active::before': {
              content: '"\\f053"',
            },
          }}
        ></Box>
      </MotionBox>
    </Flex>
  )
}
