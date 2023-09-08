import { motion } from "framer-motion";
import Images from "../../assets";
import { AnimateH2 } from "../../components/AnimateTitle";
import { appear, slideIn, staggerContainer } from "../../utils/motion";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import NavObserver from "../../components/NavObserver";

import video from "../../assets/video/about.mp4"

const About = () => {

  return (
    <section 
      id="about" 
      className="about-section"
    >
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        className="row-default-v2 font-raleway about-head"
        data-cursor-stick="#resumeTitle"
      >

        <video autoPlay muted loop={true} controls={false}>
          <source src={video} type="video/mp4" />
        </video>

        <div className="back-blur"></div>

        <AnimateH2 title="ABOUT" textStyles='observe' id="resumeTitle" />
      </motion.div>
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        className="row-default-v1 about-content"
      >
        <div className="about-picture">
          <div className="sphere-black" data-cursor-text={'Rotate Sphere'} data-cursor-size="100px" data-cursor-color={'#000000f0'} >
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
          
          <div className="sphere-white" data-cursor-text={'Rotate Sphere'} data-cursor-size="100px" data-cursor-color={'#38bff8f0'}>
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

          <motion.img variants={appear('tween', 0.4, 1.5)} src={Images.pictureB} alt="Developer" className="picture-b" />

          <motion.img variants={appear('tween', 0.4, 1.5)} src={Images.pictureA} alt="Developer" className="picture-a" /> 
          
        </div>
        <NavObserver name="resume" stringClass="about-resume font-montserrat" config={0.5}>
          <motion.p variants={slideIn( 'left', 'tween', 0.3, 0.6)}>
            Venezuelan graduated with a mention in Electronic Technology, with more than 2 years of professional work experience developing Frontend and Backend projects using Wordpress, Divi, Elementor, React, Next, NodeJs, Github, MySql, MongoSB, Tailwind, Bootstrap and Laravel. Expert of HTML, CSS and Javascript, outstanding in PHP, Typescript, C++ and assembler. Experienced in projects such as Frontend layout, Api RESTful, Ecommerce and online learning.
          </motion.p>
          <motion.p variants={slideIn( 'left', 'tween', 0.5, 0.6)}>
            My outstanding soft skills are: self-development, negotiation, attention to detail, listening skills, composure, teamwork, self-awareness, creativity, conflict management, customer orientation, perseverance, problem solving, and analytical-critical thinking.
          </motion.p>
        </NavObserver>
      </motion.div>
    </section>
  )
}

export default About