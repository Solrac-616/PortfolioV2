import { useEffect } from 'react';
import { Outlet } from 'react-router-dom'

// IMPORTS COMPONENTES
import Navbar from '../components/Navbar';
// import ThemeButtons from '../components/themeButtons'
import WhatsApp from '../components/WhatsApp'

// CURSOR ANIMADO DE LA LIBRERIA - SE IMPORTA AQUI PARA QUE ESTE DISPONIBLE EN TODA LA APP
import { Cursor } from 'react-creative-cursor';

// IMPORTS PARA LA FUNCION DE SCROLL
import { useLocation } from 'react-router-dom';
import { animateScroll as scroll, scroller } from 'react-scroll';

import 'react-creative-cursor/dist/styles.css';
import Themebuttondual from '../components/themebuttondual';

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
        smooth: 'easeInOutQuart',
        offset: 0
      });
            
    }
  }, [location]);

  return (
    <div className='root-layout'>
    
      <main className='main-content'>
        
        <Navbar />
        <Outlet />
        {/* <ThemeButtons /> */}
        <Themebuttondual />
        <WhatsApp />
        
      </main>

      <Cursor isGelly={true} cursorBackgrounColor="#00000057" />
    </div>
  )
}

export default Root