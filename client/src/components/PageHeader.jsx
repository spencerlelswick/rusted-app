import { GiHamburgerMenu } from 'react-icons/gi'
import Wrapper from '../assets/wrappers/PageHeader'
import { useAppContext } from '../context/appContext'
import links from '../utils/links'

const PageHeader = ({ pageName }) => {
  const currentPage = links.filter((page) => page.text === pageName)[0]
  const { toggleSidebar, logoutUser, user } = useAppContext()

  return (
    <Wrapper style={{ background: currentPage.accentColor }}>
      <button type='button' className='btn sidebar-btn' onClick={toggleSidebar}>
        <GiHamburgerMenu />
      </button>
      <div className='icon'>
        {currentPage.icon}
        <span className='page-header'>{currentPage.text}</span>
      </div>
    </Wrapper>
  )
}
export default PageHeader
