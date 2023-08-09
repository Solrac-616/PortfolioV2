import { useEffect, useState } from 'react'

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0, });

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