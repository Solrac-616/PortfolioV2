import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useSelector  } from 'react-redux';

const Customlink = (props) => {
  
  const { id, title, onclick, name, scrollId } = props;
  const [active, setActive] = useState('');

  const { navState } = useSelector(state => state.nav);

  useEffect(() => {
    setActive(navState);
  }, [navState])

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