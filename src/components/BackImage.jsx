
const BackImage = (props) => {
  const { img, show, classString } = props;

  return (
    <div className={`back-img-absolute ${ show ? 'back-img-activate' : ''} ${classString ? classString : ''}`}  style={{ backgroundImage: `url(${img})` }}>
      
    </div>
  )
}

export default BackImage