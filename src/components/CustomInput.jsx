
const CustomInput = (props) => {

  const { type, name, classNames, placeholder, value, onChange, onBlur, isError, } = props;

  return (
    < >
      <input 
      type={type}
      name={name}
      className={`${classNames} ${isError ? 'input-error' : ''}`} 
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      autoComplete="off"
      />
    </>
  )
}

export default CustomInput