import { Link, Outlet } from 'react-router-dom'
import Wrapper from '../../assets/wrappers/SharedLayout'

const SharedLayout = () => {
  return (
    <Wrapper>
      <nav>
        <Link to='stats'>stats</Link>
      </nav>
      <Outlet />
    </Wrapper>
  )
}
export default SharedLayout
