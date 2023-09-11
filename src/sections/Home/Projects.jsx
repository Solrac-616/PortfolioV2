import { AnimatePresence, motion } from "framer-motion"
import { AnimateH2 } from "../../components/AnimateTitle"
import Filters from "../../components/Filters"
import ProjectItem from "../../components/ProjectItem"
import { projects } from "../../constants"
import { staggerContainer } from "../../utils/motion"
import { useEffect, useState } from "react"

const Projects = () => {
  const list = projects;
  const [filtered, setFiltered] = useState([]);
  const [active, setActive] = useState("all");

  useEffect(() => {
    if (active === "all") {
      setFiltered(list)
      return
    }
    const filterProjects = list.filter(project => project.categorys.includes(active));
    setFiltered(filterProjects);
  }, [active])

  return (
    <section id="projects" className="section-projects">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        className="row-default-v1 font-raleway projects-head"
      >
        <AnimateH2 title="PROJECTS" textStyles='' id="projectsTitle" />
      </motion.div>

      <Filters 
        active={active} 
        setActive={setActive}
        list={list}
        setFiltered={setFiltered}
      />

      <motion.div 
        layout
        className="row-default-v1 projects-list"
      >
        <AnimatePresence>
          {filtered.map(item => (
            <ProjectItem 
              key={item.id} 
              project={item}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

export default Projects