import { Link, Outlet } from 'react-router-dom'
import Wrapper from '../../assets/wrappers/SharedLayout'
import MobileSidebar from '../../components/MobileSidebar'
import LgSidebar from '../../components/LgSidebar'
import Navbar from '../../components/Navbar'

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className='dashboard sidebar-container'>
        <MobileSidebar />
        <LgSidebar />

        <div>
          <Navbar />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  )
}
export default SharedLayout
