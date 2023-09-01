
const BackImage = (props) => {
  const { img, show } = props;

  return (
    <div className={`back-img-absolute ${ show ? 'back-img-activate' : ''}`}  style={{ backgroundImage: `url(${img})` }}>
      
    </div>
  )
}

export default BackImage