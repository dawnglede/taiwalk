import NavBar from './NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'

const App = () => {
  return (
    <div className='main'>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </div>
  )
}

export default App

