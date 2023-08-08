import { useEffect, useState, useRef } from 'react'
import { motion } from "framer-motion";
import { useFollowPointer } from '../Hooks/useFollowPointer'; 

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0, });

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

    });
  }, []);


  return (
    <>

      
      <motion.div 
        id='outline'
        className="cursor-outline" 
        ref={ref}
        animate={{ x, y }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 200,
          restDelta: 0.1
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