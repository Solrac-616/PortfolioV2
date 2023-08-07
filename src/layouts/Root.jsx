import { Outlet } from 'react-router-dom'
import ThemeButtons from '../components/themeButtons'
import WhatsApp from '../components/WhatsApp'

const Root = () => {
  return (
    <>
      <Outlet />
      <ThemeButtons />
      <WhatsApp />
    </>
  )
}

export default Root