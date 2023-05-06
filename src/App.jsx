import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import HomePage from './pages/HomePage'
import HorseInfo from './pages/HorseInfo'
import HorsesLocation from './pages/HorsesLocation'
import Splash from './pages/Splash'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Splash />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/horseinfo/:id' element={<HorseInfo />} />
        <Route path='/horseslocation' element={<HorsesLocation />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;