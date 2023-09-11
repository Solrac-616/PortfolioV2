import { proyectsFilters } from "../constants"

const Filters = (props) => {
  
  const { active, setActive } = props;

  return (
    <div className="row-default-v1">
      {proyectsFilters.map(item => (
        <button
          key={item.id}
          className={`${active === item.name ? "active" : undefined}`}
          onClick={() => setActive(item.name)}  
        >{item.name}</button>
      ))}
    </div>
  )
}

export default Filters