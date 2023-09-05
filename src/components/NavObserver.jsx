import { useEffect } from "react";
import useNavbar from "../Hooks/useNavbar";
import { useInView } from "react-intersection-observer";

const NavObserver = ({name, children }) => {

  const { navState, renewNav } = useNavbar();

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
  });

  
  useEffect(() => {
    if (inView) {
      renewNav(name);
      console.log('OBSERVER: ' + name);
      console.log(inView);
      console.log("-----------------------");
    }

  }, [inView, navState])

  return (
    <div ref={ref} className="observer-wrapper">
      {children}
    </div>
  )
}

export default NavObserver