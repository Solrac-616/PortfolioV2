import { useState } from "react";

const useCircle = () => {
  const [circleState, setCircleState] = useState('none');

  const stateA = () => {
    setCircleState('react');
  };
  const stateB = () => {
    setCircleState('angular');
  };
  const stateC = () => {
    setCircleState('next');
  };
  const stateD = () => {
    setCircleState('start');
  };


  return {
    circleState,
    stateA,
    stateB,
    stateC,
    stateD,
  };
}

export default useCircle