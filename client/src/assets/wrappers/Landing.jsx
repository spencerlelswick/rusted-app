import styled from 'styled-components'

const Wrapper = styled.main`
  .page {
    background-image: url('../images/Landing-background.jpg');
    background-color: var(--primary-1000);
    min-height: calc(100vh);
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
  }
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-weight: 700;
    color: var(--white);
    span {
      color: var(--primary-500);
    }
  }
`

export default Wrapper
