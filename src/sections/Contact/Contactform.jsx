import { useEffect } from "react"
import { motion } from "framer-motion"
import { AnimateH2 } from "../../components/AnimateTitle"
import { appear, staggerContainer } from "../../utils/motion"
import NavObserver from "../../components/NavObserver"
import Images from "../../assets/images";

import { useFormik } from 'formik';
import * as yup from 'yup';
import CustomInput from "../../components/CustomInput"

const formSchema = yup.object({
  name: yup.string().required("Name is rquired."),
  email: yup.string().email("Email is required.").required("Debe ingresar su correo"),
  message: yup.string().required("Message is rquired.")
});

const Contactform = () => {

  useEffect(() => {
    let scene = document.getElementById('scene');
    let parallax = new Parallax(scene);
  }, [])

  const formik = useFormik({
    initialValues: {
      name: '',
      email: ''
    },
    validationSchema: formSchema,
    onSubmit: async (values) => {
      console.log(JSON.stringify(values));
    },
  });

  return (
    <motion.section 
      id="contactForm"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.6 }}
      className="form-section"
    >
      
      <div className="scene-wrapper">
        <div id="scene">
          <div className="layer" data-depth-x="-0.3" data-depth-y="-0.1">
            <motion.div variants={appear('tween', 0.6, 0.5)} className="img-scene">    
              <img src={Images.p1} alt="" />
            </motion.div>
          </div>
          <div className="layer" data-depth-x="-0.5" data-depth-y="-0.2">
            <motion.div variants={appear('tween', 0.3, 0.5)} className="img-scene">    
              <img src={Images.p2} alt="" />
            </motion.div>
          </div>
          <div className="layer">
            <motion.div variants={appear('tween', 1, 0.5)} className="img-scene">    
              <img src={Images.p3} alt="" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="form-container">
        
        <form onSubmit={formik.handleSubmit}>
          <NavObserver name="form" config={0.5} stringClass="contact-form">
            <AnimateH2 title="Contact me" textStyles=''/>
            <div className="input-box">
              <i className="fa-solid fa-user"></i>
              <CustomInput
                type="text"
                name="name"
                classNames=""
                isError={formik.touched.name && formik.errors.name}
                value={formik.values.name}
                onChange={formik.handleChange("name")}
                onBlur={formik.handleBlur("name")}
              />
              <label htmlFor="">Name</label>
              <div className="error">
                {formik.touched.name && formik.errors.name}
              </div>
            </div>
            <div className="input-box">
              <i className="fa-solid fa-at"></i>
              <CustomInput
                type="email"
                name="email"
                classNames=""
                isError={formik.touched.email && formik.errors.email}
                value={formik.values.email}
                onChange={formik.handleChange("email")}
                onBlur={formik.handleBlur("email")}
              />
              <label htmlFor="">Email</label>
              <div className="error">
                {formik.touched.email && formik.errors.email}
              </div>
            </div>
            <textarea 
              placeholder="write a message..." 
              rows={10}
            />
            <div className="btn-submit">
              <button 
                type='submit' 
                className={`${formik.isValid ? 'form-valid' : 'form-invalid'}`}
              > 
                Ingresar
              </button>
            </div>
          </NavObserver>
        </form>
        
        
      </div>
      
    </motion.section>
  )
}

export default Contactform