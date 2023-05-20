import './App.css'
import { Landing, Dashboard, Error, Register } from './pages'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/login' element={<Landing />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </Router>
  )
}

export default App
