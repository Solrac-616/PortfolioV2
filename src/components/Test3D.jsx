// import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import useNavbar from "../Hooks/useNavbar";
import { useEffect, useState } from "react";

Canvas
const Test3D = () => {
  const { navState, renewNav } = useNavbar();
  const [active, setActive] = useState('');

  useEffect(() => {
    setActive(navState)
  }, [navState])

  return (
    <section className="section-test">
      <div className="clicker" onClick={() => console.log(active)}>
        CLICKME
      </div>

      <div className="clicker" onClick={() => renewNav("SOCIALS")}>
        CAMBIO
      </div>

      <div>
        {/* <Canvas>
          <OrbitControls enableZoom={false} autoRotate />
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]}/>
          <mesh>
            <boxGeometry args={[2,2,2]}/>
            <meshStandardMaterial color="red" />
          </mesh>
        </Canvas> */}
      </div>
    </section>
    
  )
}

export default Test3D