import {
  ChakraProps,
  extendTheme,
  theme as baseTheme,
  withDefaultColorScheme,
  withDefaultVariant,
} from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
// type for props
// ChakraProps, BoxProps
// AppProps from next/app

// Component Style
// - style object for base or default style
// baseStyle: {}
// - styles for diff sizes
// sizes: {}
// - styles for diff visual variants ("outline", "solid")
// variants: {}
// - default values for size and variant
// defaultProps: { size: "", variant: "", }

const inputSelectStyles = {
  variants: {
    filled: {
      field: {
        _focus: {
          borderColor: 'brand.500',
        },
      },
    },
  },
  sizes: {
    md: {
      field: {
        borderRadius: 'none',
      },
    },
  },
}

const brandRing = {
  _focus: {
    ring: 2,
    ringColor: 'brand.500',
  },
}

const breakpoints = {
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
}

const components = {
  Button: {
    baseStyle: {
      borderRadius: 'none',
    },
    sizes: {
      sm: {
        px: 5,
        h: '50px',
        fontSize: '20px',
      },
      md: {
        px: 7,
        h: '60px',
        fontSize: '25px',
      },
      lg: {
        px: 8,
        h: '70px',
        fontSize: '30px',
        borderRadius: '10px',
      },
    },
    variants: {
      primary: (props: ChakraProps) => ({
        rounded: 'none',
        ...brandRing,
        color: mode('white', 'gray.800')(props),
        backgroundColor: mode('brand.500', 'brand.200')(props),
        _hover: {
          backgroundColor: mode('brand.600', 'brand.300')(props),
        },
        _active: {
          backgroundColor: mode('brand.700', 'brand.400')(props),
        },
      }),
      secondary: {
        bg: 'secondary',
        color: '#fff',
      },
      ghost: {
        bg: 'transparent',
        border: '1px solid red',
      },
      primaryGhost: {
        bg: 'transparent',
        border: '1px solid',
        borderColor: 'primary',
      },
      secondaryGhost: {
        bg: 'transparent',
        border: '1px solid',
        borderColor: 'secondary',
        _hover: {
          color: '#fff',
          bg: '#BB1415',
        },
      },
    },
  },
  Input: { ...inputSelectStyles },
  Select: { ...inputSelectStyles },
  Checkbox: {
    baseStyle: {
      control: {
        borderRadius: 'none',
        ...brandRing,
      },
    },
  },
}

const fonts = {
  heading: `Montserrat, ${baseTheme.fonts?.heading}`,
  body: `Menlo monospace, ${baseTheme.fonts?.body}`,
}

// Scalable code design via theme control instead
// of hardcode properties into components
const colors = {
  brand: {
    50: '#f5fee5',
    100: '#e1fbb2',
    200: '#cdf781',
    300: '#b8ee56',
    400: '#a2e032',
    500: '#8ac919',
    600: '#71ab09',
    700: '#578602',
    800: '#3c5e00',
    900: '#203300',
    primary: '#00DDFF',
    greyPrimary: '#38383d',
    greySecondary: '#42414d',
  },
  black: '#16161D',
}

// Scalable element customisation
const styles = {
  global: {
    h1: {
      fontWeight: '500',
      lineHeight: '110%',
      fontSize: '3xl',
    },
  },
}

const overrides = {
  styles,
  colors,
  fonts,
  breakpoints,
  components,
}

const theme = extendTheme(
  overrides,
  withDefaultColorScheme({
    colorScheme: 'brand',
    components: ['Checkbox'],
  }),
  withDefaultVariant({
    variant: 'filled',
    components: ['Input', 'Select'],
  })
)

export default theme
