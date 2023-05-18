import './App.css'
import { Landing } from './pages'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route to='/' element={<Landing />}></Route>
      </Routes>
    </Router>
  )
}

export default App
