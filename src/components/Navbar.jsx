import { useEffect, useState } from 'react';
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';
import Customlink from './Customlink';
import Images from '../assets';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';
import useNavbar from '../Hooks/useNavbar';

const Navbar = () => {
  const { navState, renewNav } = useNavbar();
  const [active, setActive] = useState( navState ? navState : 'hero');

  // DETECCION DE SCROLL PARA EL NAVBAR
  const [scrolled, setScrolled] = useState(false);
  // HOOK PARA DETECTAR EL SCROLL
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      //console.log(scrollTop);
      if (scrollTop > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
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
                active={active === item.name}
                onclick={()=>renewNav(item.name)}
                title={item.title}
                />
              </motion.li>
            ))}

          </ul>
        </div>
      </motion.nav>
    </header>
  )
}

export default Navbar