import { Outlet } from 'react-router-dom'
import ThemeButtons from '../components/themeButtons'
import WhatsApp from '../components/WhatsApp'
import CustomCursor from '../components/CustomCursor'
import AnimateCursor from '../components/AnimateCursor'

const Root = () => {
  return (
    <>
      <Outlet />
      <ThemeButtons />
      <WhatsApp />
      <CustomCursor />
      {/* <AnimateCursor /> */}
    </>
  )
}

export default Root