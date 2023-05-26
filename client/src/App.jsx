import './App.css'
import { Landing, Error, Register, ProtectedRoute } from './pages'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { SharedLayout, Stats } from './pages/dashboard'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />}></Route>
        </Route>
        <Route path='/landing' element={<Landing />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </Router>
  )
}

export default App
