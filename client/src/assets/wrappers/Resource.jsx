import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 20px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);

  .miner-container {
    width: 300px;
    padding: 20px;
    border: 3px solid black;
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

  .iron {
    background: var(--resource-iron);
  }
  .coal {
    background: var(--resource-coal);
  }
  .copper {
    background: var(--resource-copper);
  }
  .limestone {
    background: var(--resource-limestone);
  }
  .sulfur {
    background: var(--resource-sulfur);
  }
`
export default Wrapper
