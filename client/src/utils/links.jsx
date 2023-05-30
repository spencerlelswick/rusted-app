import { GiLightBackpack, GiOpenChest } from 'react-icons/gi'
import { MdFort, MdLogout } from 'react-icons/md'
import { FaStoreAlt } from 'react-icons/fa'

const links = [
  {
    id: 1,
    text: 'Stats',
    path: '/',
    icon: <MdFort />,
    accentColor: `var(--primary-400)`,
  },
  {
    id: 2,
    text: 'Base',
    path: '/base',
    icon: <MdFort />,
    accentColor: `var(--primary-600)`,
  },
  {
    id: 3,
    text: 'Outpost',
    path: 'outpost',
    icon: <FaStoreAlt />,
    accentColor: 'blue',
  },
  {
    id: 4,
    text: 'Inventory',
    path: 'inventory',
    icon: <GiLightBackpack />,
    accentColor: 'green',
  },
  {
    id: 5,
    text: 'Storage',
    path: 'storage',
    icon: <GiOpenChest />,
    accentColor: 'purple',
  },
]

export default links
