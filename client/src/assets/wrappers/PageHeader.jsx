import styled from 'styled-components'

const Wrapper = styled.div`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
  .logo {
    display: flex;
    align-items: center;
    width: 100px;
  }
  .icon {
    font-size: 4rem;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    padding-left: 2rem;
  }
  .page-header {
    padding: 2rem;
  }
  .page-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .btn-container {
    position: relative;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    box-shadow: var(--shadow-2);
  }
  .sidebar-btn {
    background: var(--transparent);
    box-shadow: none;
    color: var(--white);
    font-size: 2rem;
    height: 100%;
    width: 250px;
    transition: var(--transition);
  }

  .dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    background: var(--primary-100);
    box-shadow: var(--shadow-2);
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    border-radius: var(--borderRadius);
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: var(--primary-500);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;

    .page-center {
      width: 90%;
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
      padding: 2rem;
    }
    .sidebar-btn {
      display: none;
    }
  }
`
export default Wrapper
