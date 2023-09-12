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
        <a href="https://github.com/Solrac-616?tab=repositories" target="_blank" rel="noreferrer">
          <div className="alt">
            <p>View Project</p> <i className="fa-solid fa-angles-right"></i>
          </div>
        </a>
      </div>
      <div className="card-content">
        <span className="name font-raleway">
          <h3>{project.name}</h3>
        </span>
        <div className="card-info font-montserrat">
          <p>{project.description}</p>
          <div className="categorys">
            {categorys.map( item => (
              <span key={item} className={`${item === "react" && "color-react"} ${item === "angular" && "color-angular"} ${item === "node" && "color-node"}`}>#{item}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectItem