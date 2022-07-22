import dynamic from 'next/dynamic'
import { Box, Flex } from '@chakra-ui/react'
import p5Types from 'p5'

const Sketch = dynamic(() => import('react-p5'), {
  ssr: false,
})

export default function ScratchText() {
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef)
  }

  const draw = (p5: p5Types) => {
    p5.strokeWeight(50)
    if (p5.mouseIsPressed) {
      p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY)
    }
  }

  return (
    <Flex as="section" justify="center" align="center" minH="100vh" width="100%" background="#000">
      <Sketch
        setup={setup}
        draw={draw}
        style={{
          position: 'absolute',
          background: '#fff',
          zIndex: 2,
          mixBlendMode: 'screen',
        }}
      />
      <Box className="content" maxW="80%" color="#fff">
        <h2 style={{ fontSize: '3em' }}>Scratch-Off Reveal Content Effects.</h2>
        <p style={{ fontSize: '1.2em' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
      </Box>
    </Flex>
  )
}
