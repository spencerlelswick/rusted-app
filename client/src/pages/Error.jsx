import { Link } from 'react-router-dom'
import img from '../assets/images/Landing-background.jpg'
import Wrapper from '../assets/wrappers/Error'

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='not found'></img>
        <h3>404</h3>
        <p>Page not found</p>
        <Link to='/'>Back to home</Link>
      </div>
    </Wrapper>
  )
}
export default Error
