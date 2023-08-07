import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AnimateCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
  };

  return (
    <motion.div
      className={`animated-cursor`}
      variants={variants}
      //tried setting animate={animate} but didn't work
      animate="default"
      transition={{
        duration: 0.3,
        ease: "linear",
        repeat: 0,
        stiffness: 80,
      }}
    ></motion.div>
  )
}

export default AnimateCursor