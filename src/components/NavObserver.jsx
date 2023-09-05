import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { useDispatch  } from 'react-redux';
import { setNavState } from "../store/slices/navSlice/navSlice";

const NavObserver = ({name, stringClass, type, config, children }) => {

  const dispatch = useDispatch();

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: config,
  });

  
  useEffect(() => {
    if (inView) {
      dispatch(setNavState(name))
      // console.log('OBSERVER: ' + name);
      // console.log(navState);
      // console.log("-----------------------");
    }

  }, [inView])

  return (
    <>
      { type ?
          <section ref={ref} className={`observer-wrapper ${stringClass ? stringClass : ''}`}>
            {children}
          </section>
        :
          <div ref={ref} className={`observer-wrapper ${stringClass ? stringClass : ''}`}>
            {children}
          </div>
      }

    </>
  )
}

export default NavObserver