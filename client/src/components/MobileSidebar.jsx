import NavLinks from './NavLinks'
import Wrapper from '../assets/wrappers/MobileSidebar'
import { useAppContext } from '../context/appContext'
import { MdLogout } from 'react-icons/md'
import { FaTimes } from 'react-icons/fa'

const MobileSidebar = () => {
  const { logoutUser, toggleSidebar, showSidebar } = useAppContext()
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <button type='button' className='close-btn' onClick={toggleSidebar}>
          <FaTimes />
        </button>
        <NavLinks toggleSidebar={toggleSidebar} />
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
export default MobileSidebar
