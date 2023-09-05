import { Link } from 'react-router-dom';
import useNavbar from '../Hooks/useNavbar';
import { useEffect, useState } from 'react';

const Customlink = (props) => {
  
  const { id, title, onclick, name, scrollId } = props;
  const [active, setActive] = useState('');
  const { navState } = useNavbar();

  useEffect(() => {
    setActive(navState);
    console.log('==============estado===============');
    console.log(navState);
    console.log('====================================');
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