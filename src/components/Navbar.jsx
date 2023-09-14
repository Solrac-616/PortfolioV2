import { useEffect, useState } from 'react';
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';
import Customlink from './Customlink';
import Images from '../assets';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';
import useNavbar from '../Hooks/useNavbar';

import '../customcss/burguer.css';

const Navbar = () => {
  const { navState, renewNav } = useNavbar();
  const [active, setActive] = useState( navState ? navState : 'hero');
  const [mobile, setMobile] = useState( false );

  // DETECCION DE SCROLL PARA EL NAVBAR
  const [scrolled, setScrolled] = useState(false);
  // HOOK PARA DETECTAR EL SCROLL
  useEffect(() => {
    const skillScroll = () => {
      const scrollTop = window.scrollY;
      //console.log(scrollTop);
      if (scrollTop > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", skillScroll);

    return () => window.removeEventListener("scroll", skillScroll);
  }, []);

  useEffect(() => {
    setActive(navState);
  }, [navState])

  return (
    <header>
      <motion.nav 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className={`navbar-default ${scrolled ? "fixed-navbar" : ""}`}
      >
        <div className="row-default-v1 row-navbar">

          <Link to={`/`} state={{ scrollTo: false }} data-cursor-text="Home" data-cursor-color="#000000bf" data-cursor-size="60px" className='logo-navbar'>
            <motion.img src={Images.logoA} variants={zoomIn(0.4, 0.7)} alt="logo" className='' />
          </Link>

          <ul className="nav-links font-montserrat">
            
            {navLinks.map((item, index) => (
              <motion.li key={item.title} variants={fadeIn('down', 'spring', index * 0.3 , 0.8)}> 
                <Customlink
                id={item.id}
                scrollId={item.scrollId}
                name={item.name}
                active={active}
                onclick={()=>renewNav(item.name)}
                title={item.title}
                />
              </motion.li>
            ))}

          </ul>
          <div className={`mobile-burguer ${mobile ? 'active' : ''}`} onClick={() => setMobile(!mobile)} >
            <span className="top"></span>
            <span className="middle"></span>
            <span className="bottom"></span>
          </div>
        </div>
      </motion.nav>
      <div className={`mobile-navbar ${mobile ? 'active' : ''}`} >
        <div className="mobile-navbar-back" onClick={() => setMobile(false)}>

        </div>
        <ul className="mobile-links font-montserrat">
          {navLinks.map((item) => (
            <li key={item.title} >
              <Customlink
              id={item.id}
              scrollId={item.scrollId}
              name={item.name}
              active={active}
              onclick={()=>renewNav(item.name)}
              title={item.title}
              />
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Navbar