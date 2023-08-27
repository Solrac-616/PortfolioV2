import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

Canvas
const Test3D = () => {
  return (
    <section className="section-test">
      <div>
        <Canvas>
          <OrbitControls enableZoom={false} autoRotate />
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]}/>
          <mesh>
            {/* <shapeGeometry/> */}
            <boxGeometry args={[2,2,2]}/>
            <meshStandardMaterial color="#38bff8" />
          </mesh>
        </Canvas>
      </div>
    </section>
    
  )
}

export default Test3D