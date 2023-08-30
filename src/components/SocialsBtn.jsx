import { motion } from 'framer-motion'
import '../customcss/socialsbtn.css'
import { fadeInDual, rotateA, staggerContainer } from '../utils/motion'

const SocialsBtn = () => {
  return (
    <>
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="socials-btn"
      >
        <div className='socials-back'>
          <motion.div variants={rotateA('tween', 0.2, 5)} className="back-icon" 
            onVariantChange={() => {
              this.motion.scale.start({
                scale: 0,
                duration: 0.3,
              });
            }} 
          >
            <i className="fa-solid fa-hand-point-up"></i>
          </motion.div>
        </div>
        <div className="up">
          <motion.a data-cursor-color="#25d36569" variants={fadeInDual('right', 'down', 'spring', 0.3 , 1)} href="https://wa.me/584123809750" target="_blank" className="socials-btn-card card1">
            <i className="fa-brands fa-whatsapp whatsapp"></i>
          </motion.a>
          <motion.a data-cursor-color="#0e76a869" variants={fadeInDual('left', 'down', 'spring', 0.5 , 1)} href="https://www.linkedin.com/in/carlos-brito-carrero/" target="_blank" className="socials-btn-card card2">
            <i className="fa-brands fa-linkedin linkedin"></i>
          </motion.a>
        </div>
        <div className="down">
          <motion.a data-cursor-color="#F1502F69" variants={fadeInDual('right', 'up', 'spring', 0.9 , 1)} href="https://github.com/Solrac-616" target="_blank" className="socials-btn-card card3">
            <i className="fa-brands fa-github github"></i>
          </motion.a>
          <motion.a data-cursor-color="#DB443769" variants={fadeInDual('left', 'up', 'spring', 0.7 , 1)} href="mailto:carlos.e1998g@gmail.com" target="_blank" className="socials-btn-card card4">
            <i className="fa-brands fa-google google"></i>
          </motion.a>
        </div>
      </motion.div>
    </>
  )
}

export default SocialsBtn