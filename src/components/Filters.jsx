import { proyectsFilters } from "../constants"

const Filters = (props) => {
  
  const { active, setActive, classString } = props;

  return (
    <div className={`row-default-v1 ${classString} font-montserrat`} data-cursor-text={'Filter projects'} data-cursor-size="100px" data-cursor-color={'#00000090'}>
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