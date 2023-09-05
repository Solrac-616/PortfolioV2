import { useEffect } from "react";
import { skills } from "../../constants";
import NavObserver from "../../components/NavObserver";

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
      
      <div className="row-default-v1 skills-head">
        <NavObserver name="skills">
          <h2 data-name="skills" key="skills" className="" >SKILLS</h2>
        </NavObserver>
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