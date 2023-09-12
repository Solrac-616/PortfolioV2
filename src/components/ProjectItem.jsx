import { motion } from "framer-motion"

const ProjectItem = ({ project }) => {

  const categorys = project.categorys

  return (
    <motion.div 
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="card-project"
    >
      <div className="card-img" style={{ backgroundImage: `url(${project.img})` }}>
        {/* <img src={project.img} alt={project.name} /> */}
      </div>
      <div className="card-content">
        <span className="name">{project.name}</span>
        <h2>{project.name}</h2>
        {categorys.map( item => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </motion.div>
  )
}

export default ProjectItem