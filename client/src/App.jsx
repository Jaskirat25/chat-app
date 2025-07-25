
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import Profilepage from './pages/Profilepage'
import Loginpage from './pages/Loginpage'

function App() {

  return (
    
    <div className="bg-[url('./src/assets/bgImage.svg')] bg-contain">

    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/profile' element={<Profilepage/>}/>
      <Route path='/login' element={<Loginpage/>}/>
    </Routes>
    </div>
    
  )
}

export default App
