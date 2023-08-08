import { useState, useEffect } from "react";

export function useFollowPointer(ref) {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {

    const handlePointerMove = ({ clientX, clientY }) => {
      const element = ref.current;

      const x = clientX * 1;
      const y = clientY * 1;
      setPoint({ x, y });
    };

    window.addEventListener("mousemove", handlePointerMove);

    return () => window.removeEventListener("mousemove", handlePointerMove);
  }, []);

  return point;
}