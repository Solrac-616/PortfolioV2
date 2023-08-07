import { useEffect, useState, useRef } from 'react'
import { motion } from "framer-motion";
import { useFollowPointer } from '../Hooks/useFollowPointer'; 

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0, });
  const [outlinePosition, setoutlinePosition] = useState({ x: 0, y: 0, });

  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);


  useEffect(() => {
    // Escucha los eventos de movimiento del mouse
    window.addEventListener("mousemove", (event) => {
      // Actualiza la posición del cursor
      setCursorPosition({
        x: event.clientX,
        y: event.clientY,
      });


      setoutlinePosition({
        x: event.clientX,
        y: event.clientY,
      });
    });
  }, []);


  return (
    <>

      
      <motion.div 
        className="cursor-outline2" 
        ref={ref}
        animate={{ x, y }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 50,
          restDelta: 0.001
        }}
      />

      <div className="cursor-outline" style={{
          position: "fixed",
          top: outlinePosition.y,
          left: outlinePosition.x,
        }}
      />

      <div className='custom-cursor' style={{
          position: "fixed",
          top: cursorPosition.y,
          left: cursorPosition.x,
        }}
      />

    </>
  )
}

export default CustomCursor