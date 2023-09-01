import { motion } from "framer-motion"
import { AnimateH2 } from "../../components/AnimateTitle"
import { staggerContainer } from "../../utils/motion"
import CustomMap from "../../components/CustomMap"
import MapTest from "../../components/MapTest"

const Contactform = () => {
  return (
    <section id="contactForm" className="form-section" >
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.6 }}
        className="row-default-v1"
      >
        <form action="">
          <AnimateH2 title="Contact me" textStyles=''/>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <textarea placeholder="write a message." rows={10} ></textarea>
        </form>
      </motion.div>
      <div className="custom-map-container">
        {/* <CustomMap /> */}
        <MapTest />
      </div>
    </section>
  )
}

export default Contactform