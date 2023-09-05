import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { useDispatch  } from 'react-redux';
import { setNavState } from "../store/slices/navSlice/navSlice";

const NavObserver = ({name, children }) => {

  const dispatch = useDispatch();

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
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
    <div ref={ref} className="observer-wrapper">
      {children}
    </div>
  )
}

export default NavObserver