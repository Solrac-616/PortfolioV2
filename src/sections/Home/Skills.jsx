import { useEffect } from "react";
import useNavbar from "../../Hooks/useNavbar";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const { navState, renewNav } = useNavbar();

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
  });
  useEffect(() => {
    if (inView) {
      renewNav("skills");
      console.log('=============INVIEWSKILLS===============');
      console.log(navState);
    }

  }, [inView])

  return (
    <section ref={ref} id="skills" className="section-test">
      <h2 data-name="skills" key="skills" className="" >SKILLS</h2>
    </section>
  )
}

export default Skills