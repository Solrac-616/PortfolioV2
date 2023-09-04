import { useState } from 'react'

const useNavbar = () => {
  const [navState, setNavState] = useState('hero');

  const renewNav = (renew) => {
    setNavState(renew);
  };

  return {
    navState,
    renewNav,
  };
}

export default useNavbar