import { motion } from "framer-motion";
import Images from "../../assets";
import { AnimateH2 } from "../../components/AnimateTitle";
import { staggerContainer } from "../../utils/motion";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";

const About = () => {

  return (
    <motion.section 
      id="about" 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
      className="about-section"
    >
      <div className="row-default-v1 font-raleway about-head">
        <AnimateH2 title="ABOUT" textStyles=''/>
      </div>
      <div className="row-default-v1 about-content">
        <div className="about-picture">
          <div className="sphere-black">
            <Canvas camera={{fov: 25, position: [5, 5, 5]}}>
              <OrbitControls enableZoom={false} autoRotate />
              <ambientLight intensity={1} />
              <directionalLight position={[5, 4, 1]} />
              <Sphere args={[1, 100, 200]} scale={1.1}>
                <MeshDistortMaterial 
                  color='#212121'
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Canvas>
          </div>
          
          <div className="sphere-white">
            <Canvas camera={{fov: 25, position: [5, 5, 5]}}>
              <OrbitControls enableZoom={false} autoRotate />
              <ambientLight intensity={1} />
              <directionalLight position={[5, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={1.1}>
                <MeshDistortMaterial 
                  color='#38bff8'
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Canvas>
            
          </div>

          <img src={Images.pictureB} alt="Developer" className="picture-b" />

          <img src={Images.pictureA} alt="Developer" className="picture-a" /> 
          
        </div>
        <div className="about-resume font-montserrat">
          <p>
            Venezuelan graduated with a mention in Electronic Technology, with more than 2 years of professional work experience developing Frontend and Backend projects using Wordpress, Divi, Elementor, React, Next, NodeJs, Github, MySql, MongoSB, Tailwind, Bootstrap and Laravel. Expert of HTML, CSS and Javascript, outstanding in PHP, Typescript, C++ and assembler. Experienced in projects such as Frontend layout, Api RESTful, Ecommerce and online learning.
          </p>
          <p>
            My outstanding soft skills are: self-development, negotiation, attention to detail, listening skills, composure, teamwork, self-awareness, creativity, conflict management, customer orientation, perseverance, problem solving, and analytical-critical thinking.
          </p>
          
        </div>
      </div>
    </motion.section>
  )
}

export default About