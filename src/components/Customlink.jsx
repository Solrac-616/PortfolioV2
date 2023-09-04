import { Link } from 'react-router-dom';

const Customlink = (props) => {

  const { id, title, onclick, active, name, scrollId } = props;

  return (
    <>
    
      <Link data-cursor-color="#00000022" to={`${id}`} state={{ scrollTo: scrollId }} className={`nav-link ${active === name ? 'active' : '' }`} aria-current="page" onClick={onclick}>
        <span>
          {title}
        </span>
        <i></i>
      </Link>
        
    </>
  )
}

export default Customlink