import './App.css'
import { Landing, Error, Register, ProtectedRoute } from './pages'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import {
  Inventory,
  Outpost,
  SharedLayout,
  Stats,
  Storage,
} from './pages/dashboard'
import Base from './pages/dashboard/Base'
import Resources from './pages/dashboard/Resources'

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
          <Route path='/base' element={<Base />}></Route>
          <Route path='/outpost' element={<Outpost />}></Route>
          <Route path='/inventory' element={<Inventory />}></Route>
          <Route path='/storage' element={<Storage />}></Route>
          <Route path='/resources' element={<Resources />}></Route>
        </Route>
        <Route path='/landing' element={<Landing />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </Router>
  )
}

export default App
