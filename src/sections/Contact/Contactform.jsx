import { motion } from "framer-motion"
import { AnimateH2 } from "../../components/AnimateTitle"
import { staggerContainer } from "../../utils/motion"

const Contactform = () => {
  return (
    <section id="contactForm" className="form-section" >
      <div className="custom-map-container">
        
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.6 }}
        className="form-container"
      >
        <form action="">
          <AnimateH2 title="Contact me" textStyles=''/>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <textarea placeholder="write a message." rows={10} ></textarea>
        </form>
      </motion.div>
      
    </section>
  )
}

export default Contactform