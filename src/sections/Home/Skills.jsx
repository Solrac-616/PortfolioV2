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

  useEffect(() => {
    if (inView) {
      renewNav("skill");
      console.log('=============INVIEWSKILLS===============');
      console.log(inView);
    }

  }, [inView, navState, renewNav])

  return (
    <section ref={ref} id="skills" className="section-skills">
      
      <div className="row-default-v1">
        <h2 data-name="skills" key="skills" className="" >SKILLS</h2>
      </div>

      <div className="row-default-v1">
        {skills.map((item) => (
          <div className="skill-item" key={item.id} style={{ backgroundColor: `${item.color}` }}> 
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills