import { Box, Flex } from '@chakra-ui/react'

export default function GlowingIcons() {
  return (
    <Flex
      justify="center"
      align="center"
      minH="100vh"
      minW="100vw"
      bg="var(--bg)"
      sx={{
        '--bg': '#222',
        ul: {
          position: 'relative',
          display: 'flex',
          gap: '50px',
        },
        li: {
          position: 'relative',
          listStyle: 'none',
          width: '80px',
          height: '80px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          transition: '0.5s',
        },
        'li:hover': {
          zIndex: '100',
          transform: 'scale(0.75)',
        },
        'li::before': {
          content: '""',
          position: 'absolute',
          inset: '30px',
          boxShadow: `0 0 0 10px var(--clr),
            0 0 0 20px var(--bg),
            0 0 0 22px var(--clr)
          `,
          transition: '0.5s',
        },
        'li:hover::before': {
          inset: '0px',
        },
        'li::after': {
          content: '""',
          position: 'absolute',
          inset: '0',
          background: 'var(--bg)',
          transform: 'rotate(45deg)',
        },
        a: {
          position: 'relative',
          textDecoration: 'none',
          color: 'var(--clr)',
          zIndex: '10',
          fontSize: '2em',
          transition: '0.5s',
        },
        'li:hover a': {
          fontSize: '3em',
          filter: 'drop-shadow(0 0 20px var(--clr)) drop-shadow(0 0 40px var(--clr)) drop-shadow(0 0 60px var(--clr))',
        },
      }}
    >
      <ul>
        <Box as="li" sx={{ '--clr': '#1877f2' }}>
          <a href="#glowing" data-color="#fff">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </Box>
        <Box as="li" sx={{ '--clr': '#ff0000' }}>
          <a href="#glowing">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </Box>
        <Box as="li" sx={{ '--clr': '#1da1f2' }}>
          <a href="#glowing">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </Box>
      </ul>
    </Flex>
  )
}
