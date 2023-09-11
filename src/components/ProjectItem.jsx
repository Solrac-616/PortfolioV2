import { motion } from "framer-motion"

const ProjectItem = ({ project }) => {
  return (
    <motion.div 
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>{project.name}</h2>
      <img src={project.img} alt={project.name} />
    </motion.div>
  )
}

export default ProjectItem