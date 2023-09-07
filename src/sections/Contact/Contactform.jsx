import { useEffect } from "react"
import { motion } from "framer-motion"
import { AnimateH2 } from "../../components/AnimateTitle"
import { staggerContainer } from "../../utils/motion"
import NavObserver from "../../components/NavObserver"
import Images from "../../assets/images"

const Contactform = () => {

  useEffect(() => {
    let scene = document.getElementById('scene');
    let parallax = new Parallax(scene);
  }, [])

  return (
    <section 
      id="contactForm" 
      className="form-section"
    >
      
      <div className="scene-wrapper">
        <div id="scene">
          <div className="layer" data-depth-x="-0.3" data-depth-y="-0.1">
            <div className="img-scene">    
              <img src={Images.p1} alt="" />
            </div>
          </div>
          <div className="layer" data-depth-x="-0.5" data-depth-y="-0.2">
            <div className="img-scene">    
              <img src={Images.p2} alt="" />
            </div>
          </div>
          <div className="layer">
            <div className="img-scene">    
              <img src={Images.p3} alt="" />
            </div>
          </div>
        </div>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.6 }}
        className="form-container"
      >
  
        <form action="">
          <NavObserver name="form" config={0.5}>
            <AnimateH2 title="Contact me" textStyles=''/>
          </NavObserver>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <textarea placeholder="write a message." rows={10} ></textarea>
        </form>
      </motion.div>
      
    </section>
  )
}

export default Contactform