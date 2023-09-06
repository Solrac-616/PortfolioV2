import { useEffect } from "react";
import { skills } from "../../constants";
import NavObserver from "../../components/NavObserver";
import video from "../../assets/video/skills.mp4"

import { AnimateH2 } from "../../components/AnimateTitle";
import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motion";

const Skills = () => {

  useEffect(() => {
    let itemsSkills = document.querySelectorAll(".skill-item");

    const handleScroll = () => {

      itemsSkills.forEach(box => {
        const rect = box.getBoundingClientRect();
        if (rect.bottom < window.innerHeight) {
          box.classList.add('active');
        } else{
          box.classList.remove('active');
        }
      })

    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="skills" className="section-skills">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        className="row-default-v2 skills-head"
      >
        <video autoPlay muted loop={true} controls={false}>
          <source src={video} type="video/mp4" />
        </video>

        <div className="back-blur"></div>

        <AnimateH2 title="SKILLS" textStyles='title' id="skillsTitle" />
        
        {/* <h2 data-name="skills" key="skills" className="" >SKILLS</h2> */}
      </motion.div>

      <NavObserver name="skill" stringClass="row-default-v1 skills-grid" config={0.2}>
        {skills.map((item) => (
          <div className="skill-item" key={item.id}> 
            <div className="skill" data-cursor-text={item.name} data-cursor-size="90px" data-cursor-color={item.color}>
              <div className="skill-img">
                <img src={item.img} alt={item.name} />
              </div>
            </div>
          </div>
        ))}
      </NavObserver>
    </section>
  )
}

export default Skills