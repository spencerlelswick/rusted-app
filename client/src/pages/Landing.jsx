import logo from '../assets/images/Rusted-logo.png'
import Wrapper from '../assets/wrappers/Landing'

const Landing = () => {
  return (
    <Wrapper>
      <div className=' page'>
        <img src={logo} alt='Rusted Logo' className='logo' />
        <div className='info'>
          <h1>
            <span>Rusted</span> Idle
          </h1>
          <button className='btn btn-hero'>play now</button>
        </div>
      </div>
    </Wrapper>
  )
}

export default Landing
