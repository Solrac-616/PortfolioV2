import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { AnimateH2 } from "../../components/AnimateTitle"
import { appear, staggerContainer } from "../../utils/motion"
import NavObserver from "../../components/NavObserver"
import Images from "../../assets/images";

import { useFormik } from 'formik';
import * as yup from 'yup';
import CustomInput from "../../components/CustomInput"

import emailjs from '@emailjs/browser';

import { useDispatch  } from 'react-redux';
import { setLoaderFalse, setLoaderTrue } from "../../store/slices/loaderSlice/loaderSlice";

import Swal from 'sweetalert2';

const formSchema = yup.object({
  name: yup.string().required("Name is required."),
  email: yup.string().email("Email is invalid.").required("Email is required."),
  message: yup.string().required("Message is rquired.")
});

const Contactform = () => {
  const form = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    let scene = document.getElementById('scene');
    let parallax = new Parallax(scene);
  }, [])

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message:""
    },
    validationSchema: formSchema,
    onSubmit: async (values) => {
      // alert(JSON.stringify(values));
      // console.log('====================================');
      // console.log(form.current);
      // console.log('====================================');
      dispatch(setLoaderTrue());

      emailjs.sendForm('service_opq9kqg', 'template_trd6zim', form.current, '-X8Zm7t_jq68dJkkz')
      .then((result) => {
        dispatch(setLoaderFalse());
        Swal.fire({
          title: "It's done!!",
          text: "Thank you for sending an email, I will respond as soon as possible. I invite you to write to me on WhatsApp also if you have not done so yet.",
          icon: 'success',
          confirmButtonText: 'Continue',
        }).then((result) => {
          formik.resetForm();
        })
      }, (error) => {
        dispatch(setLoaderFalse());
        Swal.fire({
          title: "Something's wrong",
          text: "I'm sorry, something went wrong when sending the email, the service is probably disconnected, try to contact me by WhatsApp and I will resolve it as soon as possible.",
          icon: 'error',
          confirmButtonText: 'Continue',
        }).then((result) => {
          
        })
      });

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
          <div className="layer layer1" data-depth-x="-0.3" data-depth-y="-0.1">
            <motion.div variants={appear('tween', 0.6, 0.5)} className="img-scene">    
              <img src={Images.p1} alt="" />
            </motion.div>
          </div>
          <div className="layer layer2" data-depth-x="-0.5" data-depth-y="-0.2">
            <motion.div variants={appear('tween', 0.3, 0.5)} className="img-scene">    
              <img src={Images.p2} alt="" />
            </motion.div>
          </div>
          <div className="layer">
            <motion.div variants={appear('tween', 1, 0.5)} className="img-scene scene-dots">    
              <img src={Images.p3} alt="" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="form-container">
        
        <form ref={form} onSubmit={formik.handleSubmit}>
          <NavObserver name="form" config={0.5} stringClass="contact-form">
            <AnimateH2 title="Contact me" textStyles=''/>
            <div className={`input-box ${formik.touched.name && formik.errors.name ? 'box-error' : ''} ${formik.touched.name && !formik.errors.name ? 'box-valid' : '' }`}>
              <i className="fa-solid fa-user"></i>
              <CustomInput
                type="text"
                name="name"
                classNames={`font-montserrat ${formik.values.name === "" ? '' : 'focus'}`}
                isError={formik.touched.name && formik.errors.name}
                value={formik.values.name}
                onChange={formik.handleChange("name")}
                onBlur={formik.handleBlur("name")}
              />
              <label htmlFor="">Name</label>
              <div className="line"></div>
              <p className="error">
                {formik.touched.name && formik.errors.name}
              </p>
            </div>
            <div className={`input-box  ${formik.touched.email && formik.errors.email ? 'box-error' : ''} ${formik.touched.email && !formik.errors.email ? 'box-valid' : '' }`}>
              <i className="fa-solid fa-at"></i>
              <CustomInput
                type="email"
                name="email"
                classNames={`font-montserrat ${formik.values.email === "" ? '' : 'focus'}`}
                isError={formik.touched.email && formik.errors.email}
                value={formik.values.email}
                onChange={formik.handleChange("email")}
                onBlur={formik.handleBlur("email")}
              />
              <label htmlFor="">Email</label>
              <div className="line"></div>
              <p className="error">
                {formik.touched.email && formik.errors.email}
              </p>
            </div>
            <div className={`text-box  ${formik.touched.message && formik.errors.message ? 'box-error' : ''} ${formik.touched.message && !formik.errors.message ? 'box-valid' : '' }`}>
              <textarea
                name="message"
                className={`${formik.touched.message && formik.errors.message ? 'input-error' : ''}`}
                value={formik.values.message}
                onChange={formik.handleChange("message")}
                onBlur={formik.handleBlur("message")}
                placeholder="write a message..." 
                rows={10}
              />
              <p className="error">
                {formik.touched.message && formik.errors.message}
              </p>
            </div>
            <div className="btn-submit">
              <button 
                type='submit' 
                className={`btn-form ${formik.isValid ? '' : 'form-invalid'} ${formik.isValid && formik.touched.message && formik.touched.email && formik.touched.name ? 'form-valid' : ''}`}
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