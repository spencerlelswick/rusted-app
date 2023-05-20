import { useState, useEffect } from 'react'
import { Logo, FormRow, Alert } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  showAlert: true,
}

const Register = () => {
  const [values, setValues] = useState(initialState)

  const handleChange = (e) => {
    console.log(e.target)
  }

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
  }

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {values.showAlert && <Alert />}
        {!values.isMember && (
          <FormRow
            handleChange={handleChange}
            type='text'
            name='name'
            value={values.name}
          />
        )}

        <FormRow
          handleChange={handleChange}
          type='email'
          name='email'
          value={values.email}
        />
        <FormRow
          handleChange={handleChange}
          type='password'
          name='password'
          value={values.password}
        />
        <button type='submit' className='btn btn-block'>
          Submit
        </button>
        <p>
          {values.isMember ? 'New member?' : 'Already registered?'}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}
export default Register
