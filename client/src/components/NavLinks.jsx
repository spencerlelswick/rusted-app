import { NavLink } from 'react-router-dom'
import links from '../utils/links'
import { useAppContext } from '../context/appContext'

const NavLinks = () => {
  const { toggleSidebar } = useAppContext()
  return (
    <div>
      {links.map((link) => {
        const { id, text, path, icon } = link
        return (
          <NavLink
            to={path}
            key={id}
            onClick={toggleSidebar}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            <span className='icon'>{icon}</span>
            {text}
          </NavLink>
        )
      })}
    </div>
  )
}
export default NavLinks
