const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>
      <input
        type={type}
        className='form-input'
        name={name}
        onChange={handleChange}
        values={value}
      />
    </div>
  )
}
export default FormRow
