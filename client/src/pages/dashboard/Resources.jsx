import { useEffect, useState } from 'react'
import { PageHeader } from '../../components'
import Wrapper from '../../assets/wrappers/Resource'
import { useAppContext } from '../../context/appContext'

const Resources = () => {
  const { factory, updateFactory, isLoading } = useAppContext()
  const [miners, setMiners] = useState(factory.miners)
  const [resourceValue, setResourceValue] = useState('iron')

  const handleChange = (e) => {
    setResourceValue(e.target.value)
  }

  const handleSubmit = () => {
    updateFactory({
      ...factory,
      miners: [
        ...factory.miners,
        {
          id: factory.miners.length + 1,
          minerLvl: 1,
          name: 'Tier 1 Auto-miner',
          resource: resourceValue,
          yield: 60,
        },
      ],
    })
  }

  useEffect(() => {
    console.log('factory refreshed')

    setMiners(factory.miners)
  }, [factory])

  return (
    <div>
      <PageHeader pageName='Resources' />

      <form>
        <label htmlFor='addMiner' className='form-label'>
          Add a miner
        </label>
        <input className='form-input' name='addMiner' onChange={handleChange} />

        <div className='form-row'>
          <label htmlFor='resource' className='form-label'>
            resource
          </label>
          <select
            name='resource'
            onChange={(e) => handleChange(e)}
            value={resourceValue}
            className='form-select'
          >
            <option value='iron'>Iron</option>
            <option value='copper'>Copper</option>
            <option value='limestone'>LimeStone</option>
            <option value='coal'>Coal</option>
            <option value='sulfur'>Sulfur</option>
          </select>
        </div>
        <button
          type='button'
          className='btn'
          onClick={handleSubmit}
          disabled={isLoading}
        >
          Submit
        </button>
      </form>

      <Wrapper>
        {miners.map((autoMiner) => {
          return (
            <div
              key={autoMiner.id}
              className={`miner-container ${autoMiner.resource}`}
            >
              <h5>{autoMiner.name}</h5>
              <p>Yield: {autoMiner.yield}</p>
              <p>Mining: {autoMiner.resource}</p>
              <p>AutoMiner level: {autoMiner.minerLvl}</p>
            </div>
          )
        })}
      </Wrapper>
    </div>
  )
}
export default Resources
