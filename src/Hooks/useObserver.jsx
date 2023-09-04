import { useState } from "react";

const useObserver = () => {
  const [observer, setObsrever] = useState('hero');

  const intersection = (renew) => {
    setObsrever(renew);
  };

  return {
    observer,
    intersection,
  };
}

export default useObserver