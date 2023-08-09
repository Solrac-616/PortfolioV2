import { useEffect } from 'react';
import { Outlet } from 'react-router-dom'

// IMPORTS COMPONENTES
import ThemeButtons from '../components/themeButtons'
import WhatsApp from '../components/WhatsApp'
// import CustomCursor from '../components/CustomCursor'
// import AnimateCursor from '../components/AnimateCursor'

// IMPORTS PARA LA FUNCION DE SCROLL
import { useLocation } from 'react-router-dom';
import { animateScroll as scroll, scroller } from 'react-scroll';
import Navbar from '../components/Navbar';
import { Cursor } from 'react-creative-cursor';

import 'react-creative-cursor/dist/styles.css';

const Root = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      // console.log("scrollto" + location.state.scrollTo);
      scroller.scrollTo(location.state.scrollTo, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: 0
      });
    } else {
      scroll.scrollToTop({
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
            
    }
  }, [location]);

  return (
    <div className='root-layout'>
    
      <main className='main-content'>
        <Navbar />
        <Outlet />
        <ThemeButtons />
        <WhatsApp />
        {/* <CustomCursor /> */}
        {/* <AnimateCursor /> */}
        
      </main>

      <Cursor isGelly={true} cursorBackgrounColor="#00000057"/>
    </div>
  )
}

export default Root