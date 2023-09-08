
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
      autocomplete="off"
      />
    </>
  )
}

export default CustomInput