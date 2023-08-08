import { useEffect, useState } from 'react';
import { navLinks } from '../constants';
import Customlink from './Customlink';

const Navbar = () => {
  const [active, setActive] = useState("");

  // DETECCION DE SCROLL PARA EL NAVBAR
  const [scrolled, setScrolled] = useState(false);
  // HOOK PARA DETECTAR EL SCROLL
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      //console.log(scrollTop);
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav className={`${scrolled ? "fixed-navbar" : ""}`}>
        <div className="logo">

        </div>
        <ul className="nav-links">
          {navLinks.map((item) => (
            <Customlink
              key={item.title}
              id={item.id}
              scrollId={item.scrollId}
              active={active === item.id}
              onclick={()=>setActive(item.id)}
              title={item.title}
            />
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar