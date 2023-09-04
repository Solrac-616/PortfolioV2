import { useEffect } from "react";
import useNavbar from "../../Hooks/useNavbar";
import { useInView } from "react-intersection-observer";
import { skills } from "../../constants";

const Skills = () => {
  const { navState, renewNav } = useNavbar();

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
  });

  let itemsSkills = document.querySelectorAll(".skill-item");

  useEffect(() => {
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

  useEffect(() => {
    if (inView) {
      renewNav("skill");
      console.log('=============INVIEWSKILLS===============');
      console.log(inView);
    }

  }, [inView, navState, renewNav])

  return (
    <section ref={ref} id="skills" className="section-skills">
      
      <div className="row-default-v1 skills-head">
        <h2 data-name="skills" key="skills" className="" >SKILLS</h2>
      </div>

      <div className="row-default-v1 skills-grid">
        {skills.map((item) => (
          <div className="skill-item" key={item.id}> 
            <h3 style={{ backgroundColor: `${item.color}` }}>{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills