import { IconButton, useColorMode, Icon } from '@chakra-ui/react'
import { RiMoonFill, RiSunLine } from 'react-icons/ri'

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      aria-label="theme toggle"
      icon={colorMode === 'light' ? <Icon as={RiMoonFill} /> : <Icon as={RiSunLine} />}
      onClick={toggleColorMode}
    />
  )
}

export default ThemeToggle
