import { Box, Flex } from '@chakra-ui/react'
import { useEffect, useRef } from 'react'

const Face = ({ children }: { children: React.ReactNode }) => (
  <Flex
    pos="relative"
    w="300px"
    h="300px"
    borderRadius="50%"
    bg="#ffcd00"
    justify="center"
    align="center"
    m="0 20px"
    _hover={{
      background: 'linear-gradient(180deg, #f44336, #f44336, #ffcd00)',
    }}
    _before={{
      content: '""',
      position: 'absolute',
      top: '180px',
      width: '150px',
      height: '70px',
      borderBottomLeftRadius: '70px',
      borderBottomRightRadius: '70px',
      background: '#b57700',
      transition: '0.5s',
    }}
    sx={{
      '&:hover::before': {
        top: '210px',
        width: '150px',
        height: '20px',
        borderBottomLeftRadius: '0px',
        borderBottomRightRadius: '0px',
        background: '#9d0b00',
      },
    }}
  >
    {children}
  </Flex>
)

const Eye = ({ children }: { children: React.ReactNode }) => (
  <Flex
    pos="relative"
    top="-40px"
    wrap="wrap"
    sx={{
      '.eye': {
        position: 'relative',
        width: '80px',
        height: '80px',
        display: 'block',
        margin: '0 15px',
        background: '#fff',
        borderRadius: '50%',
      },
      '.eye::before': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '25px',
        transform: 'translate(-50%, -50%)',
        width: '40px',
        height: '40px',
        background: '#333',
        borderRadius: '50%',
      },
    }}
  >
    {children}
  </Flex>
)

export default function TracingFace() {
  const boxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const boxRefLocal = boxRef.current

    function eyeball(event: MouseEvent) {
      const eyes = document.querySelectorAll('.eye') as NodeListOf<HTMLDivElement>
      eyes.forEach(function (eye) {
        const x = eye.getBoundingClientRect().left + eye.clientWidth / 2
        const y = eye.getBoundingClientRect().top + eye.clientHeight / 2
        const radian = Math.atan2(event.pageX - x, event.pageY - y)
        const rot = radian * (180 / Math.PI) * -1 + 270
        eye.style.transform = `rotate(${rot}deg)`
      })
    }

    boxRefLocal!.addEventListener('mousemove', eyeball)

    return () => boxRefLocal!.removeEventListener('mousemove', eyeball)
  }, [])

  return (
    <Flex
      ref={boxRef}
      minH="100vh"
      bg="#251801"
      pos="relative"
      justify="center"
      align="center"
      cursor="url(/vercel.svg), pointer"
    >
      <Face>
        <Eye>
          <span className="eye"></span>
          <span className="eye"></span>
        </Eye>
      </Face>
      <Face>
        <Eye>
          <span className="eye"></span>
          <span className="eye"></span>
        </Eye>
      </Face>
      <Face>
        <Eye>
          <span className="eye"></span>
          <span className="eye"></span>
        </Eye>
      </Face>
    </Flex>
  )
}
