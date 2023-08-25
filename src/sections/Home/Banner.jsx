import { motion } from 'framer-motion';
import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { appear, fadeIn, slideInFade, staggerContainer } from '../../utils/motion';


const Banner = () => {
  const [angle, setAngle] = useState(0);
  const [type, setType] = useState(true);

  return (
    <motion.section 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.6 }}
      id="bannerHome" className="banner-home"
    >
      <div className="row-default-v1">
        <div className='banner-content'>
          <motion.p variants={fadeIn('right', 'tween', 0.3 , 0.5)} className='greeting font-montserrat'>Hi!! this is my</motion.p>
          <motion.h2 variants={appear('tween', 0.5, 0.5)} className='font-raleway'>PORTFOLIO</motion.h2>
          <motion.div variants={fadeIn('up', 'tween', 1 , 0.5)} className="typed-banner font-montserrat">
            <p>I&apos;m Carlos Brito</p>
            <TypeAnimation
              sequence={[
                1000,
                () => {
                  setAngle(0);
                },
                "Full-Stack Developer",
                1500,
                "How can we do?",
                1000,
                () => {
                  setType(true);
                  setAngle(90);
                },
                "How can we do? React",
                1000,
                "How can we do? React - MERN?",
                1000,
                () => {
                  setAngle(180);
                },
                "How can we do? Angular",
                1000,
                "How can we do? Angular + Node?",
                1000,
                () => {
                  setAngle(270);
                },
                "How can we do? Next??",
                1000,
                "Alright",
                1000,
                () => {
                },
                "Alright let's do it",
                1000,
                () => {
                  setAngle(360);
                },
                "",
                2000,
                () => {
                  setType(false);
                },
              ]}
              wrapper="span"
              speed={200}
              deletionSpeed={150}
              repeat={Infinity}
            />
          </motion.div>
        </div>
      </div>
      <div className="banner-inset">

      </div>
      <div className="profession-container">
        <motion.div variants={appear('tween', 1, 0.6)} className={`profession-box font-raleway ${type && "circle-transitions" } `}
        style={{
          transform: `rotate(-${angle}deg)`,
        }}
        >
          <div className="profession">
            <i className="fa-solid fa-laptop-code"></i>
            <h3>Full-Stack Developer</h3>
          </div>
          <div className="profession">
            <i className="fa-brands fa-js"></i>
            <h3>Next</h3>
          </div>
          <div className="profession">
            <i className="fa-brands fa-angular"></i>
            <h3>Angular</h3>
          </div>
          <div className="profession">
            <i className="fa-brands fa-react"></i>
            <h3>React</h3>
          </div>
          <div className="circle">

          </div>
        </motion.div>
        <motion.div variants={slideInFade('right', 'tween', 0.5, 0.6)} className="overlay">
          <div className="figure"></div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Banner