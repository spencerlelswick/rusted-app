import Logo from './Logo'
import Wrapper from '../assets/wrappers/LgSidebar'
import { useAppContext } from '../context/appContext'
import { MdLogout } from 'react-icons/md'
import NavLinks from './NavLinks'

const LgSidebar = () => {
  const { logoutUser } = useAppContext()

  return (
    <Wrapper>
      <header className='icon'>
        <Logo />
        <p>Rusted Idle</p>
      </header>
      <div className='nav-links'>
        <NavLinks />
        <button
          className='btn nav-link nav-logout'
          type='button'
          onClick={logoutUser}
        >
          <MdLogout className='icon' />
          Logout
        </button>
      </div>
    </Wrapper>
  )
}
export default LgSidebar
