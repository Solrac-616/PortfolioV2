import { Outlet } from 'react-router-dom'
import ThemeButtons from '../components/themeButtons'

const Root = () => {
  return (
    <>
      <Outlet />
      <ThemeButtons />
    </>
  )
}

export default Root