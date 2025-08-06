
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import Profilepage from './pages/Profilepage'
import Loginpage from './pages/Loginpage'
import {Toaster} from 'react-hot-toast'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'

const App = () => {
  const { authUser } = useContext(AuthContext)
  return (
    <div className="bg-[url('./src/assets/bgImage.svg')] bg-contain">
      <Toaster/>
      <Routes>
        <Route path='/' element={authUser ? <Homepage /> : <Navigate to="/login" />}/>
        <Route path='/login' element={!authUser ? <Loginpage /> : <Navigate to="/"/>}/>
        <Route path='/profile' element={authUser ? <Profilepage /> : <Navigate to="/login"/>}/>
      </Routes>
    </div>
  )
}
export default App
