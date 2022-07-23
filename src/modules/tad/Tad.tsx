import ThemeToggle from '@layouts/core/ThemeToggle'
import NavMenu from '@common/components/Menu'
import RotateSquare from './components/RotateSquare'
import ScratchText from './components/ScratchText'
import FoldCard from './components/FoldCard'
import SideMenu from './components/SideMenu'
import SpinningDots from './components/SpinningDots'
import GlowingIcons from './components/glowingIcons'
import Swiper3D from './components/swiper3D'

export default function Tad() {
  return (
    <>
      <NavMenu />
      <ThemeToggle />
      <RotateSquare />
      <ScratchText />
      <FoldCard />
      <SideMenu />
      <SpinningDots />
      <GlowingIcons />
      <GlowingIcons />
      <Swiper3D />
    </>
  )
}
