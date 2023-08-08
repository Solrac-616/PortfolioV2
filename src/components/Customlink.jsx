import { Link } from 'react-router-dom';

const Customlink = (props) => {

  const { id, title, onclick, active, scrollId } = props;

  return (
    <>
    
      <Link to={`${id}`} state={{ scrollTo: scrollId }} className={`relative flex dark:text-white hover:text-primary dark:hover:text-primary custom-link-1 px-2 py-1 ${active ? 'active' : '' }`} aria-current="page" onClick={onclick}>
        {title}
      </Link>
        
    </>
  )
}

export default Customlink